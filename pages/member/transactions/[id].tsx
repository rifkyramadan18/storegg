import jwtDecode from "jwt-decode";
import TransactionDetailContent from "../../../components/organisms/TransactionDetailContent";
import { HistoryTransactionTypes, JWTPayloadTypes, UserTypes } from "../../../services/data-types";
import { getMemberTransactionDetailContent } from "../../../services/member";

interface TransactionDetailProps {
  transactionDetail : HistoryTransactionTypes;
}
export default function TransactionsDetail(props: TransactionDetailProps) {
  const { transactionDetail } = props;
  console.log('detail :', transactionDetail);
  return (
    <section className="transactions-detail overflow-auto">
      <TransactionDetailContent data={transactionDetail}/>
    </section>
  );
}

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
  params: {
    id: string;
  };
}

export async function getServerSideProps({ req, params }: GetServerSideProps) {
  const { id } = params;
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }
  const jwtToken = Buffer.from(token, "base64").toString("ascii");
  const payload: JWTPayloadTypes = jwtDecode(jwtToken);
  const userFromPayload: UserTypes = payload.player;
  const IMG = process.env.NEXT_PUBLIC_IMG;
  userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`;
  const response = await getMemberTransactionDetailContent(id, jwtToken);

  return {
    props: {
      transactionDetail: response.data,
    },
  };
}
