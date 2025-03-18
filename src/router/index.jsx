import NotFound from "@/page/404/index.jsx";
import User from "@/page/User/index.jsx";
import AxiosHttp from "@/page/axios/index.jsx";
import CSS3 from "@/page/css/index.jsx";
import Dashboard from "@/page/dashboard/index.jsx";
import Home from "@/page/home/index.jsx";
import MessageDetail from "@/page/message/detail/index.jsx";
import Messages from "@/page/message/index.jsx";
import Profile from "@/page/profile/index.jsx";
import Startup from "@/page/startup/index.jsx";
import TanStack from "@/page/tanstack-query/index.jsx";
import StudentList from "@/page/tanstack-query/index.jsx";
import { Navigate, Route, Routes, useRoutes } from "react-router-dom";
/*
const RootRouter = () => {
    return (
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/css" element={<CSS3/>}/>
            <Route path="/NotFound" element={<NotFound/>}/>
            <Route path='*' element={<Navigate replace to="/NotFound"/>}/>
            <Route path="/messages" element={<Messages/>}>
                <Route path=":id" element={<MessageDetail/>}/>
            </Route>
        </Routes>
    );
};

export default RootRouter;*/

const BaseRouter = () => {
	const routes = [
		{ path: "/home", element: <Home /> },
		{ path: "/dashboard", element: <Dashboard /> },
		{ path: "/axios", element: <AxiosHttp /> },
		{ path: "/query", element: <TanStack /> },
		{ path: "/css", element: <CSS3 /> },
		{ path: "/", index: true, element: <Startup /> },
		{ path: "/profile/:id/:name", element: <Profile /> },
		{ path: "/404.html", element: <NotFound /> },
		{ path: "*", element: <Navigate replace to="/404.html" /> },
		// 嵌套子路由
		{
			path: "/messages",
			element: <Messages />,
			children: [{ path: ":id", element: <MessageDetail /> }],
		},
		{ path: "/query", element: <StudentList /> },
		{ path: "/zustand", element: <User /> },
	];
	return useRoutes(routes);
};
export default BaseRouter;
