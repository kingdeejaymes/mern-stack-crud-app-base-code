import http from "../http-common";

class TaskDataService {

  getAll(page = 0) {
    //return http.get(`restaurants?page=${page}`);
    return http.get("/tasks");
  }

  get(id) {
    return http.get(`/restaurant?id=${id}`);
  }

  find(query, by = "name", page = 0) {
    return http.get(`restaurants?${by}=${query}&page=${page}`);
  } 

  createTask(data) {
    return http.post("/tasks", data);
  }

  updateReview(data) {
    return http.put("/review-edit", data);
  }

  deleteTask(id) {
    //return http.delete(`/review-delete?id=${id}`, {data:{user_id: userId}});
    return http.delete('/tasks/' + id);
  }

}

export default new TaskDataService();