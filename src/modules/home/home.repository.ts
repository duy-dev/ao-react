import http, { HttpQuery } from "@/services/http.service";

const path = "posts";

export interface IPost {
  body: string;
  id: number;
  title: string;
  userId: number;
}

const PostRepository = {
  all: (params: HttpQuery) => {
    return http.get<IPost[]>(path, {
      params,
    });
  },

  find: (id: string, params: HttpQuery) => {
    return http.get<IPost>(`${path}/${id}`, {
      params,
    });
  },

  create: (data: IPost, params: HttpQuery) => {
    return http.post<IPost>(path, data, {
      params,
    });
  },

  update: (id: string, data: IPost, params: HttpQuery) => {
    return http.put<IPost>(`${path}/${id}`, data, {
      params,
    });
  },

  delete: (id: string, params: HttpQuery) => {
    return http.delete(`${path}/${id}`, {
      params,
    });
  },
};

export default PostRepository;
