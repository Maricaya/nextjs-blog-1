import {GetServerSideProps, NextPage} from 'next';
import * as React from 'react';
import {IncomingHttpHeaders} from 'http';

type Props = {
  browser: string
}
const index: NextPage<Props> = (props) => {
  return (
    <div>
      <h1>你的浏览器是 {props.browser}</h1>
    </div>
  );
};
export default index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const headers:IncomingHttpHeaders = context.req.headers;
  const browser = headers['user-agent'];
  return {
    props: {
      browser
    }
  };
};
