import { useParams, useSearchParams } from "react-router-dom";

const MessageDetail = () => {
	const { id } = useParams();
	return <div>消息详情组件, 消息id: {id}</div>;
};

export default MessageDetail;
