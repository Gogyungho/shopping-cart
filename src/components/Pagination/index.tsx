import _ from 'lodash';

interface IProps {
  items: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}
const Pagination = ({ items, pageSize, currentPage, onPageChange }: IProps) => {
  const pageCount = items / pageSize;
  if (Math.ceil(pageCount) === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <nav style={{ display: 'flex', justifyContent: 'center' }}>
      <ul className="pagination">
        {pages.map((page, idx) => (
          <li key={idx} className={page === currentPage ? 'page-item active' : 'page-item'}>
            <a style={{ cursor: 'pointer' }} onClick={() => onPageChange(page)} className="page-link">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
