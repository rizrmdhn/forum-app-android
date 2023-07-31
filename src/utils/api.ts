import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  IComment,
  ICreateCommentResponse,
  ICreateThreadResponse,
  ICreateVoteResponse,
  IDetailThread,
  IGetAllUsersResponse,
  IGetLeaderboardResponse,
  IGetOwnProfileResponse,
  ILeaderboard,
  ILoginResponse,
  IRegisterUserResponse,
  IThread,
  IUser,
} from '../types/interface';

const api = (() => {
  const baseUrl = 'https://forum-api.dicoding.dev/v1';

  async function _fetchWithAuth(url: string, options: any) {
    return axios(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
  }

  async function putAccessToken(token: string) {
    // localStorage.setItem('accessToken', token);
    await AsyncStorage.setItem('accessToken', token);
  }

  async function getAccessToken() {
    // return localStorage.getItem('accessToken');
    return await AsyncStorage.getItem('accessToken');
  }

  async function register({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }): Promise<IUser> {
    const response = await axios.post(`${baseUrl}/register`, {
      name,
      email,
      password,
    });

    const {status, message}: IRegisterUserResponse = response.data;

    if (status !== 'success') {
      throw new Error(message);
    }

    const {
      data: {user},
    }: IRegisterUserResponse = response.data;

    return user;
  }

  async function login({email, password}: {email: string; password: string}) {
    const response = await axios.post(`${baseUrl}/login`, {
      email,
      password,
    });

    const {status, message}: ILoginResponse = response.data;

    if (status !== 'success') {
      throw new Error(message);
    }

    const {
      data: {token},
    }: ILoginResponse = response.data;

    return putAccessToken(token);
  }

  async function getOwnProfile(): Promise<IUser> {
    const response = await _fetchWithAuth(`${baseUrl}/users/me`, {
      method: 'GET',
    });

    const {status, message}: IGetOwnProfileResponse = response.data;

    if (status !== 'success') {
      throw new Error(message);
    }

    const {
      data: {user},
    }: IGetOwnProfileResponse = response.data;

    return user;
  }

  async function getAllUsers(): Promise<IUser[]> {
    const response = await axios(`${baseUrl}/users`);

    const {status, message}: IGetAllUsersResponse = response.data;

    if (status !== 'success') {
      throw new Error(message);
    }

    const {
      data: {users},
    }: IGetAllUsersResponse = response.data;

    return users;
  }

  async function getAllThreads(): Promise<IThread[]> {
    const response = await axios(`${baseUrl}/threads`);

    const {status, message} = response.data;

    if (status !== 'success') {
      throw new Error(message);
    }

    const {
      data: {threads},
    } = response.data;

    return threads;
  }

  async function getThreadById(threadId: string): Promise<IDetailThread> {
    const response = await axios(`${baseUrl}/threads/${threadId}`);

    const {status, message} = response.data;

    if (status !== 'success') {
      throw new Error(message);
    }

    const {
      data: {detailThread},
    } = response.data;

    return detailThread;
  }

  async function createThread({
    title,
    body,
    category = '',
  }: {
    title: string;
    body: string;
    category?: string;
  }): Promise<IThread> {
    const response = await _fetchWithAuth(`${baseUrl}/threads`, {
      method: 'POST',
      data: {
        title,
        body,
        category,
      },
    });

    const {status, message}: ICreateThreadResponse = response.data;

    if (status !== 'success') {
      throw new Error(message);
    }

    const {
      data: {thread},
    }: ICreateThreadResponse = response.data;

    return thread;
  }

  async function createComment({
    threadId,
    content,
  }: {
    threadId: string;
    content: string;
  }): Promise<IComment> {
    const response = await _fetchWithAuth(
      `${baseUrl}/threads/${threadId}/comments`,
      {
        method: 'POST',
        data: {
          content,
        },
      },
    );

    const {status, message}: ICreateCommentResponse = response.data;

    if (status !== 'success') {
      throw new Error(message);
    }

    const {
      data: {comment},
    }: ICreateCommentResponse = response.data;

    return comment;
  }

  async function upVoteThread(threadId: string) {
    const response = await _fetchWithAuth(
      `${baseUrl}/threads/${threadId}/up-vote`,
      {
        method: 'POST',
      },
    );

    const {status, message}: ICreateVoteResponse = response.data;

    if (status !== 'success') {
      throw new Error(message);
    }
  }

  async function downVoteThread(threadId: string) {
    const response = await _fetchWithAuth(
      `${baseUrl}/threads/${threadId}/down-vote`,
      {
        method: 'POST',
      },
    );

    const {status, message}: ICreateVoteResponse = response.data;

    if (status !== 'success') {
      throw new Error(message);
    }
  }

  async function neturalVoteThread(threadId: string) {
    const response = await _fetchWithAuth(
      `${baseUrl}/threads/${threadId}/neutral-vote`,
      {
        method: 'POST',
      },
    );

    const {status, message}: ICreateVoteResponse = response.data;

    if (status !== 'success') {
      throw new Error(message);
    }
  }

  async function upVoteComment({
    threadId,
    commentId,
  }: {
    threadId: string;
    commentId: string;
  }) {
    const response = await _fetchWithAuth(
      `${baseUrl}/threads/${threadId}/comments/${commentId}/down-vote`,
      {
        method: 'POST',
      },
    );

    const {status, message}: ICreateVoteResponse = response.data;

    if (status !== 'success') {
      throw new Error(message);
    }
  }

  async function downVoteComment({
    threadId,
    commentId,
  }: {
    threadId: string;
    commentId: string;
  }) {
    const response = await _fetchWithAuth(
      `${baseUrl}/threads/${threadId}/comments/${commentId}/down-vote`,
      {
        method: 'POST',
      },
    );

    const {status, message}: ICreateVoteResponse = response.data;

    if (status !== 'success') {
      throw new Error(message);
    }
  }

  async function neutralVoteComment({
    threadId,
    commentId,
  }: {
    threadId: string;
    commentId: string;
  }) {
    const response = await _fetchWithAuth(
      `${baseUrl}/threads/${threadId}/comments/${commentId}/neutral-vote`,
      {
        method: 'POST',
      },
    );

    const {status, message}: ICreateVoteResponse = response.data;

    if (status !== 'success') {
      throw new Error(message);
    }
  }

  async function getLeaderboards(): Promise<ILeaderboard[]> {
    const response = await axios(`${baseUrl}/leaderboards`);

    const {status, message}: IGetLeaderboardResponse = response.data;

    if (status !== 'success') {
      throw new Error(message);
    }

    const {
      data: {leaderboards},
    }: IGetLeaderboardResponse = response.data;

    return leaderboards;
  }

  return {
    putAccessToken,
    getAccessToken,
    register,
    login,
    getOwnProfile,
    getAllUsers,
    getAllThreads,
    getThreadById,
    createThread,
    createComment,
    upVoteThread,
    downVoteThread,
    neturalVoteThread,
    upVoteComment,
    downVoteComment,
    neutralVoteComment,
    getLeaderboards,
  };
})();

export default api;
