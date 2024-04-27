import { nanoid } from "nanoid";
import React, { useState } from "react";
import NewComment from "./NewComment";
import Reply from "./Reply";
import deleteIcon from '../../icon-image/icon-delete.svg';
import editIcon from '../../icon-image/icon-edit.svg';
import minusIcon from '../../icon-image/icon-minus.svg';
import plusIcon from '../../icon-image/icon-plus.svg';
import replyIcon from '../../icon-image/icon-reply.svg';



export default function Comment(props) {
 
    const [disableUpvote, setDisableUpvote] = useState(false);
    const [backendReplies, setBackendReplies] = useState(props.replies);
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



    const createReply = async (text) => {
        return {
            content: text,
            createdAt: "Just now",
            id: nanoid(),
            replyingTo: props.user.username,
          
            user: props.currentUser,
        };
    };

    const addReply = (text) => {
        createReply(text).then((reply) => {
            setBackendReplies([reply, ...backendReplies]);
        });
        props.setActiveComment(null);
    };

    const deleteReply = (replyId) => {
        for (let i = 0; i < backendReplies.length; i++) {
            const updatedBackendReplies = backendReplies.filter(
                (backendReply) => backendReply.id !== replyId
            );
            setBackendReplies(updatedBackendReplies);
        }
    };

    const updateReply = (text, replyId) => {
        const updatedBackendReplies = backendReplies.map((backendReply) => {
            if (backendReply.id === replyId) {
                return { ...backendReply, content: text }
            }
            return backendReply
        })
        setBackendReplies(updatedBackendReplies)
        props.setActiveComment(null)
    }

    return (
        <div className="comment-container">
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
                                props.updateComment(text, props.id);
                            }}
                            initialText={props.content}
                            isEdit
                            buttonText='update'
                        />
                    )}
                </div>
                <div className="comment-votes">
                  
                  
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
                              <i className="delete-icon" class="fa-regular fa-trash-can"></i> Delete
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
                            addReply(`@${props.user.username}, ${text}`)
                        }
                        buttonText='reply'
                    />
                </div>
            )}
            {props.replies && (
                <div className="replies-container">
                    {backendReplies.map((reply) => (
                        <div className="reply">
                            <Reply
                                key={reply.id}
                                currentUser={props.currentUser}
                                activeComment={props.activeComment}
                                setActiveComment={props.setActiveComment}
                                addReply={addReply}
                                deleteReply={deleteReply}
                                updateReply={updateReply}
                                {...reply}
                            />
                        </div>
                    ))}
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
                                    props.deleteComment(props.id);
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