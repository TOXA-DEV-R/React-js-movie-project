/** @format */

const tabsReducer = (action) => {
  switch (action.type) {
    case "streaming":
      return { ctrol: true, categoryIn: "popular" };
    case "for_rent":
      return { ctrol: true, categoryIn: "top_rated" };
    case "thisWeek":
      return { ctrol: true, categoryIn: "top_rated" };
    case "in_theatre" || "movies":
      return { ctrol: true, categoryIn: "upcoming" };
    case "recommendations" || "today":
      return { ctrol: true, categoryIn: "804435/recommendations" };
    case "now_playing":
      return { ctrol: true, categoryIn: "now_playing" };
    case "on_tv":
      return { ctrol: false };
    default:
      return action;
  }
};

export default tabsReducer;
