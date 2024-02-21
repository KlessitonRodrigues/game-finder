import Icons from 'src/UI/base/Icons';
import If from 'src/UI/base/If';
import { Pages, PagesBadge } from 'src/UI/base/StyledComponents/pagination';

const Pagination = (props: Props.Pagination) => {
  const { page, onChange, total } = props;

  const onChangePage = (nextPage: number) => {
    if (nextPage > 0 && nextPage <= total) onChange(nextPage);
  };

  return (
    <Pages>
      <PagesBadge>
        <Icons type="previous" onClick={() => onChangePage(page - 1)} />
      </PagesBadge>
      <If check={page > 1}>
        <PagesBadge onClick={() => onChangePage(page - 1)}>{page - 1}</PagesBadge>
      </If>
      <PagesBadge active>{page}</PagesBadge>
      <If check={total >= page + 1}>
        <PagesBadge onClick={() => onChangePage(page + 1)}>{page + 1}</PagesBadge>
      </If>
      <If check={total >= page + 2}>
        <PagesBadge onClick={() => onChangePage(page + 2)}>{page + 2}</PagesBadge>
      </If>

      <PagesBadge>
        <Icons type="next" onClick={() => onChangePage(page + 1)} />
      </PagesBadge>
    </Pages>
  );
};

export default Pagination;
