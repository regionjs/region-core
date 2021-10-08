import React, { useEffect, VFC } from 'react';
import { random, times } from 'lodash';
import { Table } from 'antd';
import { createMappedRegion, createRegion } from 'region-core';
import faker from 'faker';
import { Card } from '../components';

interface IssueKey {
  id: string;
}

interface Issue {
  id: string;
  title: string;
  status: string;
  creator: string;
  createdTime: string;
}

const issueKeyListRegion = createRegion<IssueKey[]>([]);
const issueRegion = createMappedRegion<string, Issue>();

const newIssue = (): Issue => ({
  id: faker.random.uuid(),
  creator: `${faker.name.lastName()} ${faker.name.firstName()}`,
  createdTime: faker.date.recent(30).toISOString(),
  status: ['New', 'Assigned', 'In Progress', 'Completed', 'Abandoned'][random(4)],
  title: faker.lorem.sentence(),
});

const apiGetIssueList = (): Promise<Issue[]> => Promise.resolve(times(20, newIssue));

const loadIssueList = issueKeyListRegion.loadBy(
  apiGetIssueList,
  (state, result) => result.map((issue) => {
    issueRegion.set(issue.id, issue);
    return { id: issue.id };
  }),
);

const useIssue = issueRegion.useValue;

const TitleField: VFC<IssueKey> = ({ id }) => {
  const issue = useIssue(id);

  return <>{issue?.title}</>;
};

const statusColorMap = {
  New: '#989898',
  Assigned: '#78cc52',
  'In Progress': '#dbae03',
  Completed: '#5c6c9b',
  Abandoned: '#cc5256',
};

const StatusLabel: VFC<IssueKey> = ({ id }) => {
  const issue = useIssue(id);

  return (
    <div
      style={{
        padding: '4px 10px',
        borderRadius: 4,
        width: 100,
        textAlign: 'center',
        color: '#fff',
        // @ts-ignore
        backgroundColor: statusColorMap[issue?.status],
      }}
    >
      {issue?.status}
    </div>
  );
};

const CreatorName: VFC<IssueKey> = ({ id }) => {
  const issue = useIssue(id);

  return <>{issue?.creator}</>;
};

const FieldText: VFC<IssueKey> = ({ id }) => {
  const issue = useIssue(id);

  // @ts-ignore
  return <>{new Date(issue?.createdTime).toLocaleString()}</>;
};

const columns = [
  {
    title: 'Title',
    key: 'title',
    dataIndex: 'id',
    render: (id: string) => <TitleField id={id} />,
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'id',
    render: (id: string) => <StatusLabel id={id} />,
  },
  {
    title: 'Created By',
    key: 'creatorBy',
    dataIndex: 'id',
    render: (id: string) => <CreatorName id={id} />,
  },
  {
    title: 'Created At',
    key: 'creatorAt',
    dataIndex: 'id',
    render: (id: string) => <FieldText id={id} />,
  },
];

const App: VFC = () => {
  const loading = issueKeyListRegion.useLoading();
  const issueKeyList = issueKeyListRegion.useValue();

  useEffect(
    () => {
      loadIssueList();
    },
    [],
  );

  return (
    <Card>
      <Table<IssueKey>
        rowKey="id"
        loading={loading}
        columns={columns}
        dataSource={issueKeyList}
        pagination={false}
      />
    </Card>
  );
};

export default App;
