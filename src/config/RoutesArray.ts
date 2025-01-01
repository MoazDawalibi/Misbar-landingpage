import { lazy, LazyExoticComponent } from "react";

interface RouteProps {
  path: string;
  ComponentElement: LazyExoticComponent<React.FC<any>>;
  LayoutClassName?: string;
  isLayoutExist?: boolean;
}

const createRoute = (
    path: string,
    ComponentElement: LazyExoticComponent<React.FC<any>>,
    LayoutClassName?: string,
    isLayoutExist: boolean = true
  ): RouteProps => ({
    path,
    ComponentElement,
    LayoutClassName,
    isLayoutExist
  });
  
  export const routesArray: RouteProps[] = [
    createRoute("", lazy(() => import("../Pages/Home/Page"))),
    createRoute("contact", lazy(() => import("../Pages/Contact/Page"))),
    createRoute("about", lazy(() => import("../Pages/About/Page"))),
    createRoute("services", lazy(() => import("../Pages/Services/Page"))),
    createRoute("projects", lazy(() => import("../Pages/Projects/Page"))),
    createRoute("single_project/:id", lazy(() => import("../Pages/SingleProject/Page"))),    
    createRoute("privacy", lazy(() => import("../Pages/Privacy/Page"))),    
    createRoute("terms", lazy(() => import("../Pages/Terms/Page"))),    

  ];
  