import grapefruit from "@/page/css/css_specifishity.png";
import styles from "@/page/css/foo.module.css";
import { Typography } from "antd";
import React from "react";

const { Paragraph } = Typography;

const Css = () => {
	return (
		<>
			<Paragraph>
				<a
					href={
						"https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts"
					}
				>
					"css 层叠样式表（Cascading Style
					Sheets），理解第一个词层叠（cascade)很重要 优先级 权重 资源顺序
					有三个因素需要考虑，根据重要性排序如下，后面的更重要： 资源顺序 优先级
					重要程度"
				</a>
			</Paragraph>
			<h1 className="hello">Hello world!</h1>
			<ul className="main">
				<li>项目 1</li>
				<li>
					项目 2
					<ul>
						<li>2.1</li>
						<li>2.2</li>
					</ul>
				</li>
				<li>
					项目 3
					<ul className="special">
						<li>
							3.1
							<ul>
								<li>3.1.1</li>
								<li>3.1.2</li>
							</ul>
						</li>
						<li>3.2</li>
					</ul>
				</li>
			</ul>
			<ul>
				<li>
					默认<a href="https://www.google.com">链接</a>颜色
				</li>
				<li className="my-class-1">
					继承<a href="https://www.qq.com">链接</a>颜色
				</li>
				<li className="my-class-2">
					重置<a href="https://www.yahoo.com">链接</a>颜色
				</li>
				<li className="my-class-3">
					取消<a href="https://www.weibo.com">链接</a>颜色的设置
				</li>
			</ul>
			<blockquote>
				<p>当前块引用设置了样式</p>
			</blockquote>
			<blockquote className="fix-this">
				<p>当前块引用未设置样式</p>
			</blockquote>
			<h2>未设置类的标题</h2>
			<h2 className="small">设置了 small 类的标题</h2>
			<h2 className="bright">设置了 bright 类的标题</h2>
			<p className="better">这是个段落。</p>
			<p className="better" id="winning">
				一个选择器掌管一切！
			</p>
			<p id="addSpecificity">具有边框和背景的段落</p>
			<p id={"all"}>
				<a href={"https://developer.mozilla.org/zh-CN/docs/Web/CSS/all"}>
					all属性
				</a>
			</p>
			<img className="fit-picture" src={grapefruit} alt="Grapefruit" />
			<p>
				<a
					href={
						"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Nesting_selector"
					}
				>
					mdn css嵌套选择器
				</a>
			</p>

			<p>
				<a href={"https://www.w3.org/TR/css-nesting-1/"}> css nesting rfc</a>
			</p>
			<p>
				<a href={"https://juejin.cn/post/6844903672162304013"}>bem命名法</a>
			</p>
			<button type={"button"} className={styles.red}>
				Button
			</button>
		</>
	);
};

export default Css;
