import { useUserActions, useUserInfo } from "@/store/userStore.js";
// UserComponent.jsx
import { useState } from "react";

function UserComponent() {
	// 从 store 获取状态和操作
	const { name, age, family } = useUserInfo();
	const { updateName, updateAge, updateFamilyInfo, resetUserInfo } =
		useUserActions();

	// 本地输入框状态
	const [inputName, setInputName] = useState("");
	const [inputAge, setInputAge] = useState("");
	const [inputFather, setInputFather] = useState("");
	const [inputMother, setInputMother] = useState("");

	return (
		<div style={{ padding: 20, maxWidth: 400 }}>
			{/* 显示当前状态 */}
			<div style={{ marginBottom: 30 }}>
				<h2>当前信息</h2>
				<p>姓名: {name}</p>
				<p>年龄: {age}</p>
				<p>父亲: {family.father}</p>
				<p>母亲: {family.mother}</p>
			</div>

			{/* 更新姓名 */}
			<div style={{ marginBottom: 20 }}>
				<input
					type="text"
					placeholder="新姓名"
					value={inputName}
					onChange={(e) => setInputName(e.target.value)}
					style={{ marginRight: 10 }}
				/>
				<button
					type="button"
					onClick={() => {
						updateName(inputName);
						setInputName("");
					}}
				>
					更新姓名
				</button>
			</div>

			{/* 更新年龄 */}
			<div style={{ marginBottom: 20 }}>
				<input
					type="number"
					placeholder="新年龄"
					value={inputAge}
					onChange={(e) => setInputAge(e.target.value)}
					style={{ marginRight: 10 }}
				/>
				<button
					type="button"
					onClick={() => {
						updateAge(Number(inputAge));
						setInputAge("");
					}}
				>
					更新年龄
				</button>
			</div>

			{/* 更新父母信息 */}
			<div style={{ marginBottom: 20 }}>
				<div style={{ marginBottom: 10 }}>
					<input
						type="text"
						placeholder="新父亲"
						value={inputFather}
						onChange={(e) => setInputFather(e.target.value)}
						style={{ marginRight: 10 }}
					/>
					<input
						type="text"
						placeholder="新母亲"
						value={inputMother}
						onChange={(e) => setInputMother(e.target.value)}
						style={{ marginRight: 10 }}
					/>
				</div>
				<button
					type="button"
					onClick={() => {
						updateFamilyInfo({
							father: inputFather || family.father,
							mother: inputMother || family.mother,
						});
						setInputFather("");
						setInputMother("");
					}}
				>
					更新父母信息
				</button>
			</div>

			{/* 重置按钮 */}
			<button
				type="button"
				onClick={() => {
					resetUserInfo();
					setInputName("");
					setInputAge("");
					setInputFather("");
					setInputMother("");
				}}
				style={{ marginTop: 20 }}
			>
				重置所有信息
			</button>
		</div>
	);
}

export default UserComponent;
