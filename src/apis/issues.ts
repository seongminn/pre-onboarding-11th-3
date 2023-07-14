import { ISSUES, PER_PAGE, SORT } from '../constants/issues';
import { Issue, IssueDetail } from '../types/issue';
import { client } from '.';

export const getIssues = async (params: { page: number }) => {
  const paramsWithOptions = { ...params, sort: SORT, per_page: PER_PAGE };
  const { data } = await client.get<Issue[]>(ISSUES, { params: paramsWithOptions });

  return data;
};

export const getIssueDetail = async (id: number) => {
  const { data } = await client.get<IssueDetail>(`${ISSUES}/${id}`);

  return data;
};
