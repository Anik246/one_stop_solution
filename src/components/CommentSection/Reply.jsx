import { useState } from "react";
import NewComment from "./NewComment";
import deleteIcon from '../../icon-image/icon-delete.svg'
import editIcon from '../../icon-image/icon-edit.svg'
import minusIcon from '../../icon-image/icon-minus.svg'
import plusIcon from '../../icon-image/icon-plus.svg'
import replyIcon from '../../icon-image/icon-reply.svg'


export default function Reply(props) {

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  let starterScore = props.score;
  const isCurrentUser = props.user.username === props.currentUser.username;
  const isReplying =
    props.activeComment &&
    props.activeComment.id === props.id &&
    props.activeComment.type === "replying";
  const isEditing =
    props.activeComment &&
    props.activeComment.id === props.id &&
    props.activeComment.type === "editing";


  return (
    <div>
      <div className="comment">
        <div className="comment-heading">
          <img
            className="user-avatar"
            src={props.user.image.png}
            alt="user avatar"
          />
          <p className="username">{props.user.username}</p>
          {props.user.username === props.currentUser.username && (
            <p className="tag">you</p>
          )}
          <p className="date">{props.createdAt}</p>
        </div>
        <div className="editing">

          {!isEditing && <p className="comment-content">{props.content}</p>}
          {isEditing && (
            <NewComment
              currentUser={props.currentUser}
              handleSubmit={(text) => {
                props.updateReply(text, props.id);
              }}
              initialText={props.content}
              isEdit
              buttonText='update'
            />
          )}
        </div>
     
        <div className="comment-footer">
          {isCurrentUser ? (
            <div className="toggled-btns">
              <button
                className="delete-btn"
                onClick={() => {
                  setShowDeleteModal(true);
                }}
              >
                <i className="delete-icon" class="fa-regular fa-trash-can"></i>Delete
              </button>
              <button
                className="edit-btn"
                onClick={() => {
                  props.setActiveComment({ id: props.id, type: "editing" });
                }}
              >
              <i className="edit-icon" class="fa-solid fa-pen-to-square"></i> Edit
              </button>
            </div>
          ) : (
            <button
              className="reply-btn"
              onClick={() =>
                props.setActiveComment({ id: props.id, type: "replying" })
              }
            >
             <i class="fa-solid fa-reply"></i> Reply
            </button>
          )}
        </div>
      </div>

      {isReplying && (
        <div>
          <NewComment
            currentUser={props.currentUser}
            placeholder={`Replying to @${props.user.username}`}
            handleSubmit={(text) =>
              props.addReply(`@${props.user.username}, ${text}`)
            }
            buttonText='reply'
          />
        </div>
      )}

      {showDeleteModal && (
        <div className="delete-modal-container">
          <div className="delete-modal">
            <h2 className="delete-modal_title">Delete comment</h2>
            <p className="delete-modal_content">
              Are you sure you want to delete this comment? This will remove the
              comment and can't be undone.
            </p>
            <div className="delete-modal_btns">
              <button
                className="delete-modal_btn no"
                onClick={() => {
                  setShowDeleteModal(false);
                }}
              >
                No, cancel
              </button>
              <button
                className="delete-modal_btn yes"
                onClick={() => {
                  props.deleteReply(props.id);
                }}
              >
                Yes, delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}