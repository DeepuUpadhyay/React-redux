export const menus = [
 {
  title: "Home",
  pathname: "/",
  component: () => import("./components/home/index")
 },
 {
  title: "courses",
  pathname: "/courses",
  component: () => import("./components/courses/index")
 },
 {
  title: "about",
  pathname: "/about",
  component: () => import("./components/about/index")
 },
 {
  title: "courseForm",
  pathname: "/courseform",
  component: () => import("./components/courses/ManageCoursePage")
 }
];
