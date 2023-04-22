import RichEditor from "../../editor/RichEditor";
import UserNameAndTime from "./UserNameAndTime";
import ThreadPointsInline from "../../points/ThreadPointsInline";

interface ThreadResponseProps {
  body?: string;
  userName?: string;
  lastModifiedOn?: Date;
  points: number;
}

function ThreadResponse({
  body,
  userName,
  lastModifiedOn,
  points,
}: ThreadResponseProps) {
  return (
    <div>
      <div>
        <UserNameAndTime userName={userName} lastModifiedOn={lastModifiedOn} />
        <span style={{ marginLeft: "1em" }}>
          <ThreadPointsInline points={points || 0} />
        </span>
      </div>
      <div className="thread-body-editor">
        <RichEditor existingBody={body} />
      </div>
    </div>
  );
}

export default ThreadResponse;
