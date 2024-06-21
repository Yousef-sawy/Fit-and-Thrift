import React from "react";
import styled from "styled-components";

const Right = () => {
  return (
    <Container>
      <FolllowCard>
        <Title>
          <h2>Add us on our socials</h2>
          {/* <img src="/images/instagram-seeklogo.svg" alt="" /> */}
        </Title>
        <FeedList>
          <li>
            <a href="https://www.instagram.com/gigisthriftshop.eg?igsh=MWl3cTJvNjYwZDJxdw==">
              <Avatar />
            </a>
            <div>
              <span>Gigisthriftshop</span>
              <button>
                <a href="https://www.instagram.com/gigisthriftshop.eg?igsh=MWl3cTJvNjYwZDJxdw==">Follow</a>
              </button>
            </div>
          </li>
          <li>
            <a href="https://www.instagram.com/sealed.thrifts?igsh=MTMxMHY3Z3BycGR6cw==">
              <Avatar />
            </a>
            <div>
              <span>Sealed. thrifts </span>
              <button>
                <a href="https://www.instagram.com/sealed.thrifts?igsh=MTMxMHY3Z3BycGR6cw==">Follow</a>
              </button>
            </div>
          </li>
        </FeedList>
        {/* <Recommendation>
          View all recommendations
          <img src="../../public/images/right-icon.svg" alt="" />
        </Recommendation> */}
      </FolllowCard>
      <BannerCard>
        <img src="../../public/images/logo1.png" alt="" />
      </BannerCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: rightside;
  width: 400px; /* Decreased width */
  margin-left: auto; /* Move to the right */
`;

const FolllowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 12px;
`;

const Title = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center; /* Center horizontally */
  font-size: 19px;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
  text-align: center; /* Center the text */
`;


const FeedList = styled.ul`
  margin-top: 16px;
  display: flex;
  flex-direction: column; /* Ensure items are stacked vertically */
  align-items: center; /* Center items horizontally */
  li {
    display: flex;
    align-items: center;
    margin: 22px 0 ;
    position: relative;
    font-size: 19px;
    & > div {
      display: flex;
      flex-direction: column;
    }

    span {
      margin-bottom: 8px; /* Adds space between the span and button */
    }

    button {
      background-color: transparent;
      padding: 0;
      border: none;
      outline: none;

      a {
        background-color: rgba(0, 0, 0, 0.6);
        color: #fff;
        padding: 8px 16px;
        border-radius: 15px;
        text-decoration: none;
        font-weight: 600;
      }
    }
  }
`;


const Avatar = styled.div`
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAADy8vIhISFBQUHr6+ufn58WFhba2tr5+fnV1dXm5ub29vbv7++7u7vDw8NZWVmrq6tpaWmNjY11dXWlpaUyMjIMDAx/f39kZGSysrI0NDRPT09FRUUmJibg4ODKyso6OjqUlJRUVFRxcXF7e3uFhYWQ6cJiAAAJ5ElEQVR4nO1da2OiMBBsxQcIqKCi0mr12vr/f+LVWq8WZvOADWzh5uNdtBmTbHY3s8nDgz2CcL4+716Hmbd5bAIbLxu+7s7reRhU6K0lIn+cZo3QwsjSsR+5o/eS7Npkd0O2S15c0IuSYdvU7jBMuEdynrbNqYR0zkcvSCRMzjKyhMnyrA9tUyFxWHPwa5uFBnU5HmXOz3tkxxr8Ynn2BSGNqxJM2u66MZJK/KJF2/22wKLC9jj12u61FbypLcFx2122xtiO4K7t/lbAzoJf8Nx2byvh2djFifdt97Ui9obbxkiul6bDYWREsO1u1oIBxdhmBCdeE5hY9OignaiB0Rp8Wi1zPwxH8aAJxKMw9PPl6smka3uduTGwou95ZT+wJuL8Xd+9Z/V36PbBycrad2DGcaWbtMp9UePJDHOHeS5jRPlJ3U2FdzNVfvDEmBipiZmaIznPIpWzvZk1SUGLmSoZ7VFTTRUubRtIN1sh2Cp6u8CfUQS8h7btC4IqvoMhcaz4SSQYmDJUMTra0OicjGXk1SBo25+WGx/JxrJMzE/MyF4fS23JtGG5qSSQA5MVW5Lj7bfRbwv4VMeLqeLfOYIXkKP4sxk1hJLX4A3UWvwxiAERFMq1ovcghudw76QQmz3hGogDsS/eb/vYkB5EbfRROJ3NfChWiPAUvDOnc/wbSHLVZm9fLE7vx/L/EkHRdzCE3Zltc/3XYf4jgfFc/umxG/7PsYngf2/ERBNBaZ2dS01wMHVbZtjOiNkoRiADVYoFcsjhZmugjOTUNBEKETSDJTMPE3HD6/+9QPpiUhbEVlC0Enjfv0qL4CQdNk8Fg3SYj4WGJ9ToOk1hBjFvmgmBgCJYGgO4Ej8zi3CeT6Rs9n9IhkVTGKE8anbhAcOPVSt0ABS5mGLmd4UaXYI/ONGluDNk9PeByeBnW+jYXGIH6NC0QgdAKXgpDgNqc3Fr0DJ8b4MNwlnFsGgN0bFNRhgrKZZUkQD8wJ9CY2hNg4cQ/XNbx2clKFVLy0JjmPENYeT01AobBGgfbyjJEpHnNofqSjd7RTg9zvJkneSz4zQ0/IxiOwSOJfo91nAtF4e/JiI/WabFMPyQLhO97J6Iza8o/UxL0OgMfTZOQ+MnO3rX9naJOh+LQ9cr9qXWyNTsHl7Bv7Jlgf2zXv/nnVV/DnXvC+WZhvyDVxgcmq4SNeKxqbzRG5PGW3EsXZbOoH1hCDd8DoZTO31xSvmJ5H4BjAVimEHX1kg7peZnL79dYI44PsdpJCTn8h5ACmdSd8OfVtM2ghzaA5m0R4s3BgHUBrmr3gB82hwD5TatxAr9ZRj8wDzZAE1IfoZJnZK9DTqAL28CGzyjG2EY1q3/GgIz5xe+dEEYiiYY0qfO5kATcH5n8vFybYihgbDOADA6DZN0sd8vVjOFGXTOMDyxEHx8PFXckF0znPJVBROWpGWGyjDAGpVS7m4Z4qOR6qgS3zhlyF+mWKGw0CVD7hG8wH4UHTLkXYM3WK9FdwzV2uJ/GKar7fLPcrtKDR0fW4vqjCFMSP7EZDsb3SdlotFsqy+j2Fjui64YBro6iKcx9iNHY90nLQ+iXTHUuGpbVRrGV2mZH22PFxwxVJvRpS5fMEIpwG9Y6SXcMFQuwjeTbxq8qb7CZim6Yagwi0NTWzhVfUnbDBUHfDaZc8VUtahEd8FwQMcTdvs17TNsLHrjgCGZdDKr5rwDXblqfk7kgCHpzAztRXEBuRiNXRsHDKm86KKK6q8s0PuCpqLQJUNqCCuM4CdFahRNB5GfIfGjH6rqNim5uakam50hNYTVjz2oOnLDQWRnSJwu1VE1EpsGqGJC4GZIFLvVOyIntn6zsyJuhlgXWVe2ia2NWeEHN0N8wltXEYcXt2f0WWaGWFT3VoveBTjSMJIWMDPEsWt9XeoAfq9RaQQzQzhJOZQ40NgYTVNehniS1lcAUJuiyTTlZQiT3DxlNnD+m6TAeRlC/TuP1AhOD5NboFgZwvsXuDSNKMlI3pNwB1aG8HfmKsiEvoTB/GBlCPMzHHbmAmhrDPI1rAyRSZ/U5/YFlPA32IhYGaK4gq9gEVlTg/iClSGKVfnq+ZBo5aD/GCtD8DG2ZUgsRP3HOBnCXD5frRSUBuvz+5wMUYzDWdCHokR9XMbJEF3VYJhqMAIyZEftpzgZIlPAWcOAcul6Q8bJEB0acla3o+1Cr83gZIhcGs4qDeRQ6J0aToYodioWWtUBqpXRx0//x9CGYffXYfdtaff3w+77NN33S7sfW/QgPux+jN/9PE33c23dz5d2P+fd/XOLHpw9df/8sPtnwD04x+++FqP7epoeaKK6r2vrvjaxB/rS7muEe6Dz7r5Wvwf1Ft2vmelB3VP3a9eY6g9Pii+x6Mv/GtJqDLtfB9yDWu4e1ON3/06FHtyL0YO7TXpwP00P7hjqwT1RPbjrqwf3tfXgzr0Hp/cmCmHo7O5LOQzd3F8qiqGLO2ilMWS/R7guQ/F3QVsA3wUt/T5vG+D7vKXfyW4DfCe78Hv1rYDv1Xf7NsLW4G0EZSLH7s+Br391/77FWvm+xZrzvWH8voXsN0rsgN8okf3OjB3wOzOy3wqyA34rSPZ7T1Yg3nuS/WaXFYg3u2S/u2YF4t012W/nWQERuShxRL9/aAPy/UPZb1hagHzDUvY7pOag3yGV/ZasOei3ZIW/B2wMmCC6JkWEv+lsCJxyv77pLPxdbkOcVDNR+NvqRsCJ2lvmDj8yiB42E4sApzD/7Qg4pcJZfe4aWNLxLS0mDsZ+j2NDCAnurCXa9D/C8N+y7UdY15jdNSH0d6bq47ZBJGfvTwgogTVXyaRb4MKPgtycaPQrtgzqRK8gdSBaPR7b6LMV0AUWnyi0owaRLzvsCLjArDyElDkVP4rkCGbmTUWvRfpU/VhuTJ8VybWo5NqClVJEKdoFC5lbf6Q4pIQZX4Xs/iDRgZuSFRqkwF91bruVFmkEKv005YzBexJu2MjK3OQqxQd9/4Ja6/skx6jO1AJxxZqibdMnTrkEkxPlJ3U3lbYfZhbvMFm1bXOmK50CXnODhoES5j1v6/Atzg2kgbpqxWCv/46PJbla5n4YjuJBE4hHYejny5WuOuMTe63RjxW7TAkTrwnoCzO+cTCYX1Q99e+AkZyLruYUD9PK1dhoLQrE3tgEBtW0hW3j2caz1O2LEmFyk9QdNN6NQFhHsVNTYaEMeBV8LVV8KQ4VY3RFSCwMlfXvsZ3Oty2kdfzkI5lkFIOnYw1+F/AXFvKiQplimaNcL+7Awe8DQSJzrmYJY3psLs/mpNx6mCipW7PFiWHiJGP0kuwkTNdsl7y4oHdF5I/TNllm6Zhb4I8QhPP1efc6zDy+yl8VNl42fN2d1/OwimX5CxLFq0PGjCq5AAAAAElFTkSuQmCC");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;
  margin-right: 8px;
`;

const Recommendation = styled.a`
  color: #0a66c2;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const BannerCard = styled(FolllowCard)`
  img {
    width: 100%;
    height: 100%;
  }
`;

export default Right;
