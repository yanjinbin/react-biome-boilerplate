import { useParams, useSearchParams } from "react-router-dom";

const Profile = () => {
	const [searchParams] = useSearchParams();

	const age = searchParams.get("age"); // 获取 age
	const school = searchParams.get("school"); // 获取 name

	const { id, name } = useParams(); // 获取 URL 参数

	return (
		<div>
			<p>Profile ID: {id}</p>
			<p>Name: {name}</p>
			<p>Age: {age}</p>
			<p>School: {school}</p>
		</div>
	);
};

export default Profile;
