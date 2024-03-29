const CHATS_FETCH_RESTART = 'CHATS_FETCH_RESTART';
const CHATS_FETCH_SUCCESS = 'CHATS_FETCH_SUCCESS';
const CHATS_JOIN_SUCCESS = 'CHATS_JOIN_SUCCESS';
const CHATS_SET_ACTIVE_CHAT = 'CHATS_SET_ACTIVE_CHAT';
const CHATS_UPDATE_USER_STATE = 'CHATS_UPDATE_USER_STATE';
const CHATS_SET_MESSAGES = 'CHATS_SET_MESSAGES';
const CHATS_REGISTER_MESSAGE_SUB = 'CHATS_REGISTER_MESSAGE_SUB';

import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

function createChatReducer() {
  const joined = (state = [], action) => {
    switch (action.type) {
      case CHATS_FETCH_RESTART:
        return [];
      case CHATS_FETCH_SUCCESS:
        return action.joined;
      case CHATS_JOIN_SUCCESS:
        return [...state, action.chat];
      default:
        return state;
    }
  };
  const available = (state = [], action) => {
    switch (action.type) {
      case CHATS_FETCH_RESTART:
        return [];
      case CHATS_FETCH_SUCCESS:
        return action.available;
      case CHATS_JOIN_SUCCESS:
        return state.filter(chat => chat.id !== action.chat.id);
      default:
        return state;
    }
  };

  const activeChats = () =>
    createReducer({}, builder => {
      builder
        .addCase(CHATS_SET_ACTIVE_CHAT, (state, action) => {
          const { chat } = action;
          state[chat.id] = chat;
        })
        .addCase(CHATS_UPDATE_USER_STATE, (state, action) => {
          const { user, chatId } = action;
          const joinedUsers = state[chatId].joinedUsers;
          const index = joinedUsers.findIndex(ju => ju.uid === user.uid);

          if (index < 0) return state;
          if (joinedUsers[index].state === user.state) return state;

          joinedUsers[index].state = user.state;
        });
    });

  const messages = () =>
    createReducer({}, builder => {
      builder.addCase(CHATS_SET_MESSAGES, (state, action) => {
        const prevMessages = state[action.chatId] || [];
        state[action.chatId] = [...prevMessages, ...action.messages];
      });
    });

  const messagesSubs = (state = {}, action) => {
    switch (action.type) {
      case CHATS_REGISTER_MESSAGE_SUB:
        return { ...state, [action.chatId]: action.sub };
      default:
        return state;
    }
  };

  const reducers = {
    joined,
    available,
    activeChats: activeChats(),
    messages: messages(),
    messagesSubs,
  };

  return combineReducers(reducers);
}

export default createChatReducer();
