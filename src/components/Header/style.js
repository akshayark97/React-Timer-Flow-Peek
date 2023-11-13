import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const HeaderTitle = styled.p`
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
`;

export const HeaderIcon = styled(FontAwesomeIcon)`
  width: "100%";
  height: "100%";
`;

export const DummySpace = styled.div``;
