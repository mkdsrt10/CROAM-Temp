import styled from 'styled-components';

const NavigationWrap = styled.header`
    background: transparent;
    position: fixed;
    width: 100%;
    z-index: 9999;
    top: 0;
    transition: all 0.3s ease 0s;
  .navbar-wrap{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .mobile-menu-icon {
    display: none;
    color: #1D316C;
    font-size: 24px;
  }

  /*Drop down style*/ 
  .dropdown{
    background: transparent;
    visibility: hidden;
    opacity: 0;
    min-width: 200px;
    position: absolute;
    margin-top: 1rem;
    left: 10px;
    padding: 0px 0px;
    display: none;
    box-shadow: 0px 30px 70px 0px rgba(137,139,142,0.2);
    -webkit-transform: translateY(20px);
    -ms-transform: translateY(20px);
    transform: transalteX(-10px) translateY(20px);
    transition: all 0.3s ease-in-out;
  }
  ul li:hover > ul,
  ul li ul:hover {
    opacity: 1;
    visibility: visible;
    -webkit-transform: translateY(0px);
    -ms-transform: translateY(0px);
    transform: translateY(0px);
    display: block;
  }
  
  nav {
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
    }
    li{
        position: relative;
        padding: 15px 25px;
        .dropdown{
          li{
            padding: 0;
            a{
              color: white;
              display: block;
              padding: 5px 15px;
              &:hover{
                color: ${props => props.theme.menuHoverColor ? props.theme.menuHoverColor : '#FB7B81'};
              }
              &:before{
                content: none;
              }
            }
          }
        }
      
      a, .nav-active{
        position: relative;
        color: white;
        font-size: 15px;
        transition: 450ms all;
        padding-bottom: 0px;
        cursor: pointer;
        &:before{
          content: '';
          position: absolute;
          left : 0;
          bottom:0;
          width: 20px;
          height: 1px;
          opacity: 0;
          background: ${props => props.theme.menuHoverColor ? props.theme.menuHoverColor : '#FB7B81'};
          transition: 450ms all;
        }
        &:hover{
          color: ${props => props.theme.menuHoverColor ? props.theme.menuHoverColor : '#FB7B81'};
          &:before{
            opacity: 1;
          }
        }
      }
    }
  }
  .logo{
    margin-top: 7px;
    transition: all 0.8s cubic-bezier(0.3, 0.8, 0.2, 1) 0s;
    img{
      width: 60px;
    }
  }
  &.scrolled{
    background: white;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 10px;
    .logo{
        width: 60px;
    } 
    .nav{
      li{
        padding: 15px 25px;
        a{
          color: #1D316C;
          &:hover{
            color: ${props => props.theme.menuHoverColor ? props.theme.menuHoverColor : '#FB7B81'};
          }
        }
      }
      li{
        .dropdown{
          li{
            background: white;
            padding: 0;
          }
        }
      }
    }
  }


  @media only screen and (max-width: 912px) {
    height: auto;
    min-height: 50px;
    padding: 0px 20px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 10px;
    background: #fff;
    &.scrolled{
        padding: 3px 20px;
        .nav .collapsed {
          li{
            padding: 0;
            a{
              padding: 8px 10px;
              display: block;
            }
          }
          li+li{
            padding-left: 0;
          }
        } 
    }
    .has-dropdown{
      a{
        position: relative;
        &:before{
          content: '';
          
        }
      }
    }
    .dropdown{
      position: relative;
      left: 0;
      margin-top: 0;
      box-shadow: none;
    }
    .navbar-wrap{
        display: block;
        position: relative;
    }
    .logo {
      width: 60px;
      display: block;
      margin: 7px 0 0 0;
      img{width: 110px;}
    }
    .mobile-menu-icon {
      display: inline-block;
      position: absolute;
      top: 20px;
      right: 3px;
      cursor: pointer;
    }
    .nav{
        width: 100%;
      .collapsed {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        transition: 450ms all ease-in-out;
        overflow: hidden;
        max-height: 0;

        &.is-expanded {
          padding-top: 15px;
          overflow-y: auto;
          max-height: 250px; /* approximate max height */
        }
        li {
          padding: 0;
          margin: 0px 0px;
          width: 100%;
          .dropdown{
            li{
              a{
                color: #1D316C;
              }
            }
          }
          a{
            padding: 8px 10px;
            display: block;
            color: #1D316C;
            &:before{
              content: none;
            }
          }
        }
      }
    }
  }

`

export default NavigationWrap;