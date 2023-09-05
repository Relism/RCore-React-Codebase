import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Loading from "../components/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faFlag,
  faThumbsUp,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import "./css/Dashboard.css"; // Import your custom CSS

const DashboardComponent = () => {
  const [selectedPage, setSelectedPage] = useState(null);
  const { user } = useAuth0();

  const handleGridItemClick = (page) => {
    setSelectedPage(page);
  };

  const gridItems = [
    { icon: faCoffee, page: "Coffee" },
    { icon: faFlag, page: "Flag" },
    { icon: faThumbsUp, page: "ThumbsUp" },
    { icon: faUser, page: "User" },
    // Add more grid items as needed
  ];

  return (
    <Container fluid className="mb-5">
      <Row>
        <Col md={3} xs={12} className="grid-container">
          <div className="grid">
            {gridItems.map((item, index) => (
              <div
                key={index}
                className={`grid-item ${
                  selectedPage === item.page ? "selected" : ""
                }`}
                onClick={() => handleGridItemClick(item.page)}
              >
                <FontAwesomeIcon icon={item.icon} />
              </div>
            ))}
          </div>
        </Col>
        <Col md={9} xs={12}>
          {selectedPage ? (
            <div className="page-content">
              {/* Render content for the selected page */}
              <h2>{selectedPage}</h2>
              {/* Add your content here */}
            </div>
          ) : (
            <p className="text-center">Select a square to view its page.</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default withAuthenticationRequired(DashboardComponent, {
    onRedirecting: () => <Loading />,
  });
