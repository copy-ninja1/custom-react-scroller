import styled from 'styled-components';

const GroupBtn = styled.div`
  display: flex;
  flex: 0 1 auto;
  position: relative;
  max-width: 100%;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  .prev {
    cursor: pointer;
  }
  .next {
    cursor: pointer;
  }
  .prev,
  .next {
    align-items: center;
    display: flex;
    flex: 0 1 52px;
    justify-content: center;
    min-width: 52px;
    -webkit-tap-highlight-color: transparent;
    span {
      align-items: center;
      display: inline-flex;
      font-size: 24px;
      justify-content: center;
      letter-spacing: normal;
      line-height: 1;
      vertical-align: middle;
    }
  }
  .wrapper {
    contain: content;
    display: flex;
    flex: 1 1 auto;
    overflow: hidden;
    .content {
      display: flex;
      padding: 4px 0;
      flex: 1 0 auto;
      position: relative;
      transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
      white-space: nowrap;
      transform: translateX(0px);
      transform: translateX(${(props) => (props.position ? props.position + 'px' : '0px')});
    }
  }
`;
export default GroupBtn