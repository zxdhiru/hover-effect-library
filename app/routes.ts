import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("./layout.tsx", [
        index("routes/home.tsx"),
        route("effect/:effectName","routes/singleEffect.tsx"),
      ]),
    
] satisfies RouteConfig;
