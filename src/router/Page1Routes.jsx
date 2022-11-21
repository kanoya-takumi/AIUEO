import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";

export const Page1Routes = [
  {
    pass: "/",
    exact: true,
    children: <Page1 />
  },
  {
    path: "/Page1DetailA",
    exact: true,
    children: <Page1DetailA />
  },
  {
    path: "/Page1DetailB",
    exact: false,
    children: <Page1DetailB />
  }
];
