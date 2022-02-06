/** @format */

import { useEffect, useState } from "react";
import http from "../../services/http/index";
import { Buttons, Searching } from "./styles";
import Left from "../../components/searching/Left";
import Right from "../../components/searching/Right";
import { Col, Container, Row } from "../../styles/styles";
import ReactPaginate from "react-paginate";
import { useHistory } from "react-router-dom";

const KEY = "2dd08287b759101888b5a20c23399375";

const Index = () => {
  const [pages, setPages] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { location } = useHistory();

  const changePage = ({ selected }) => {
    setPages(selected);
  };

  useEffect(() => {
    http
      .get(
        `/3/search/movie?api_key=${KEY}&language=en-US&query=${location.state.inputValue}&page=${pages}&include_adult=false`
      )
      .then((data) => {
        setData(data.data.results);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [pages, location]);

  if (loading) {
    return <div className="loading loading--full-height"></div>;
  } else {
    return (
      <Searching
        className="container section-cards"
        style={{ marginTop: "30px" }}
      >
        <Container fluid={true} className="padding-top-bootom">
          <Row>
            <Col md="2.5">
              <Left />
            </Col>
            <Col md="9.5">
              <Right data={data} />
            </Col>
          </Row>
          <Col>
            <Buttons>
              <ReactPaginate
                initialPage={pages}
                previousLabel={"< previous"}
                nextLabel={`next >`}
                breakLabel={"..."}
                pageCount={16}
                marginPagesDisplayed={1}
                pageRangeDisplayed={6}
                onPageChange={changePage}
                containerClassName={"pagination justify-center"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
              />
            </Buttons>
          </Col>
        </Container>
      </Searching>
    );
  }
};

export default Index;
