import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { auth, db, provider, storage } from "../../firebase";
import { signInWithPopup } from "../../firebase";
import {
  GetArticles,
  SetLoading,
  SetProgress,
  setuser,
} from "../actions/action";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

export function SignnIn() {
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then((payload) => {
        dispatch(setuser(payload.user));
      })
      .catch((error) => alert(error.message));
  };
}

export function getAuth() {
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setuser(user));
      }
    });
  };
}

export function SignOut() {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch(setuser(null));
      })
      .catch((error) => alert(error.message));
  };
}

export function PostArticles(payload) {
  return (dispatch) => {
    dispatch(SetLoading(true));
    if (payload.image) {
      const storegeRef = ref(storage, `images/${payload.image.name}`);
      const uploadRef = uploadBytesResumable(storegeRef, payload.image);
      uploadRef.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
     
        },
        (error) => {
          alert(error + "this an error on uploading");
        },
        () => {
          getDownloadURL(uploadRef.snapshot.ref).then((downloadUrL) => {
            const collectionRef = collection(db, "articles");
            addDoc(collectionRef, {
              actor: {
                description: payload.user.email,
                title: payload.user.displayName,
                date: payload.time,
                image: payload.user.photoURL,
              },
              comments: 0,
              video: payload.video,
              description: payload.description,
              shareImg: downloadUrL,
            });
          });
          dispatch(SetLoading(false));
        });
    } else if (payload.video) {
      const collectionRef = collection(db, "articles");

      addDoc(collectionRef, {
        actor: {
          description: payload.user.email,
          title: payload.user.displayName,
          date: payload.time,
          image: payload.user.photoURL,
        },
        comments: 0,
        video: payload.video,
        description: payload.description,
        shareImg: payload.image,
      });

      dispatch(SetLoading(false));
    } else {
      const collectionRef = collection(db, "articles");
      addDoc(collectionRef, {
        actor: {
          description: payload.user.email,
          title: payload.user.displayName,
          date: payload.time,
          image: payload.user.photoURL,
        },
        comments: 0,
        video: payload.video,
        description: payload.description,
        shareImg: payload.image,
      });
      dispatch(SetLoading(false));
    }
  };
}

export function ShowAllPosts() {
  return (dispatch) => {
    let payload;
    const collectionRef = collection(db, "articles");
    const orderRef = query(collectionRef, orderBy("actor.date", "desc"));
    onSnapshot(orderRef, (snapshot) => {
      payload = snapshot.docs.map((doc) => doc.data());
      dispatch(GetArticles(payload));
    });
  };
}
