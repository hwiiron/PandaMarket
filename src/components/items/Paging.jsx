import StyledPaging from "./Paging.style";

const Paging = ({ handlePageChange, totalCount, currentPage }) => {
  const pageLimit = 5; // 보여줄 페이지 버튼 수
  const totalPages = Math.ceil(totalCount / 10); // 전체 페이지 수 계산

  const startPage = Math.floor((currentPage - 1) / pageLimit) * pageLimit + 1;
  const endPage = Math.min(startPage + pageLimit - 1, totalPages);

  return (
    <StyledPaging>
      <li className="prev">
        <button
          onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
        ></button>
      </li>

      {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
        <li
          key={startPage + index}
          className={currentPage === startPage + index ? "active" : ""}
        >
          <button onClick={() => handlePageChange(startPage + index)}>
            {startPage + index}
          </button>
        </li>
      ))}

      <li className="next">
        <button
          onClick={() =>
            handlePageChange(Math.min(currentPage + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        ></button>
      </li>
    </StyledPaging>
  );
};

export default Paging;
