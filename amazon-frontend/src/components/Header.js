import { PageHeader, Button, Input, Space, Badge } from "antd";
import { useMoralis } from "react-moralis";
import "./Header.css";
import USA from "../images/usa.png";
import Amazon from "../images/logo.png";
import BookStore from "../images/bookstore.png";
import { ShoppingCartOutlined, MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const Header = () => {
  const { Search } = Input;
  const categories = [
    "Comics",
    "Dictionaries",
    "Novels",
    "Fantasy",
    "Horror",
    "Adventures",
  ];
  const { authenticate } = useMoralis();
  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        extra={[
          <>
            <img src={Amazon} className="logo"></img>
            <img src={BookStore} className="logo"></img>
            <Search
              placeholder="Find a Product"
              allowClear
              enterButton="Search"
              className="searchBar"
            />
            <Button
              className="login"
              key="1"
              type="primary"
              onClick={() => authenticate()}
            >
              Login
            </Button>
            <Space size={"large"}>
              <Badge count={0} showZero>
                <span className="header-buttons">
                  <ShoppingCartOutlined className="header-icon" />
                  Cart
                </span>
              </Badge>
              <Space className="header-buttons" size={"small"}>
                <img src={USA} alt="region" className="flag"></img>
              </Space>
            </Space>           
          </>,
        ]}
      ></PageHeader>
      <div className="site-page-subheader-ghost-wrapper">
        <Space size={"middle"}>
          <Space size={"small"} style={{ fontWeight: "bold" }}>
            <MenuOutlined />
            Categories
          </Space>
          {categories.map((e) => {
              return (
                <Link to="/categories" state={e} className="categories">
                  {e}
                </Link>
              );
            })}
        </Space>
      </div>
    </div>
  );
};

export default Header;
