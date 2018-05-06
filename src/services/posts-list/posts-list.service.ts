import { Injectable } from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database';
import { Post } from "../../app/models/post.model";

@Injectable()

export class PostListService {
private postListRef = this.db.list<Post>('post-list');

 constructor(private db: AngularFireDatabase){

}

getPostList(){
    return this.postListRef;
}

addPost(post:Post){
    return this.postListRef.push(post);
}

}