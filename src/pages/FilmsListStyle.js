import styled from "styled-components";

export const FilmsListStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
  width: 100%;
  background-color: black;
  padding: 100px 16px 0;

  .Dropdown {
    max-width: 400px;
  }

  .logo-container {
    max-width: 300px;
    img {
      width: 100%;
    }
  }
  .loading-spinner {
    margin-top: 32px;
  }
  .error-section {
    margin-top: 32px;
    width: 400px;
  }
  .empty-state {
    color: white;
    font-family: sans-serif, system-ui;
    font-size: 24px;
  }
  .characters-list {
    width: 900px;
    max-width: 100%;
    margin-bottom: 32px;
    &__filter {
      width: 300px;
      margin: 32px auto;
    }
    &__table {
      width: 100%;
      border: 2px solid #f1e324;
      border-radius: 4px;
      font-family: sans-serif, system-ui;
      .rt-tbody .rt-tr-group {
        border-bottom: 2px solid #f1e324;
        color: white;
      }
      .rt-tbody .rt-td,
      .rt-thead .rt-th {
        border-right: 2px solid #f1e324;
        color: white;
        text-align: center;
        text-transform: capitalize;
      }
      .rt-thead .rt-th {
        background: #f1e324;
        color: black;
        font-weight: 700;
      }
      .rt-thead.-header {
        border-bottom: 2px solid #f1e324;
      }
      .rt-tfoot {
        border-top: 2px solid #f1e324;
      }
      .rt-tfoot .rt-td {
        border-right: 2px solid #f1e324;
        color: white;
        text-align: center;
      }
    }
  }
`;
