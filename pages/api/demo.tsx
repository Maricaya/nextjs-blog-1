import {NextApiHandler} from 'next';

const Demo:NextApiHandler = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify({name: '狗子'}));
  res.end();
};

export default Demo;
