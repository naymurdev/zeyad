import styled from "@emotion/styled";
import { Grid } from "@mui/material";

const FooterDiv = styled.div`
  width: 100%;
  border-top: 1px solid #ededed;
  padding-bottom: 50px;
  margin-top: 50px;

  .dynamic-bracket {
    position: relative;

    :hover::before {
      position: absolute;
      content: "[";
      left: -5px;
      bottom: 0;
    }

    :hover::after {
      position: absolute;
      content: "]";
      bottom: 0;
    }
  }

  .contact-container {
    padding: 10px;

    li {
      list-style: none;
      margin: 8px 0;

      a {
        font-weight: 500;
        font-size: 0.75rem;
        cursor: pointer;
        text-transform: uppercase;
      }
    }

    .news-letter-container {
      position: relative;
      border-bottom: 1px solid #ededed;

      input {
        width: 100%;
        padding: 6px 0;
        border: none;
        outline: none;
      }

      .submit-btn {
        text-transform: uppercase;
        font-size: 0.75rem;
        font-weight: 500;
        position: absolute;
        right: 4px;
        top: 4px;
      }
    }
  }
`;

const footer = () => {
  return (
    <FooterDiv>
      <div className="contact-container">
        <Grid container spacing={1.3}>
          <Grid item xs={12} sm={4} md={3}>
            <ul className="normal-contact">
              <li>
                <a href="#" className="dynamic-bracket">
                  CONTACT
                </a>
              </li>
              <li>
                <a href="#" className="dynamic-bracket">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="dynamic-bracket">
                  RETURN POLICY
                </a>
              </li>
              <li>
                <a href="#" className="dynamic-bracket">
                  SHIPPING
                </a>
              </li>
              <li>
                <a href="#" className="dynamic-bracket">
                  TERMS {"&"} CONDITIONS
                </a>
              </li>
              <li>
                <a href="#" className="dynamic-bracket">
                  PRIVACY POLICY
                </a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <ul class="media-contact">
              <li>
                <a href="#" className="dynamic-bracket">
                  INSTAGRAM
                </a>
              </li>
              <li>
                <a href="#" className="dynamic-bracket">
                  TWITTER
                </a>
              </li>
              <li>
                <a href="#" className="dynamic-bracket">
                  FACEBOOK
                </a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <ul class="digital-contact">
              <li>
                <a href="#" className="dynamic-bracket">
                  APP STORE
                </a>
              </li>
              <li>
                <a href="#" className="dynamic-bracket">
                  GOOGLE PLAY
                </a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <div className="news-letter-container">
              <input type="text" placeholder="SUBSCRIBE TO NEWSLETTER" />
              <a href="#" className="dynamic-bracket submit-btn">
                Submit
              </a>
            </div>
          </Grid>
        </Grid>
      </div>
    </FooterDiv>
  );
};

export default footer;
