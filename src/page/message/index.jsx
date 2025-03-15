import { Outlet } from "react-router-dom";

const Messages = () => {
	return (
		<div>
			<Conversations />
			<Outlet /> {/* 渲染子路由 */}
		</div>
	);
};

const Conversations = () => {
	return <div>"消息列表组件"</div>;
};

export default Messages;
