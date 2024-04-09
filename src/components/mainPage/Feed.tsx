import { CommentIcon, LikeIcon } from '@/utils/icons/icons';
import styled from 'styled-components';
import { getPosts } from '@/api/post';
import { useQuery } from '@tanstack/react-query';

const Feed = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <>
      {data?.data.content.map((post: any) => (
        <FeedTotalBox key={post.postId}>
          <UserInfoBox>
            <UserImg src={post.profileImageUrl} />
            <UserName>{post.nickname}</UserName>
            <UserGrade>서교동 토박이</UserGrade>
          </UserInfoBox>
          <ImgBox>
            <img
              src={post.imageUrls[0]}
              alt="Post Image"
              style={{ width: '100%', height: '100%' }}
            />
            <PostType>{post.category}</PostType>
          </ImgBox>
          <LikeCommentBox>
            <LikeIcon />
            <LikesCountBox>{post.likesCount}</LikesCountBox>
            <CommentIcon />
            <CommentsCountBox>{post.commentCount}</CommentsCountBox>
          </LikeCommentBox>
        </FeedTotalBox>
      ))}
    </>
  );
};

const FeedTotalBox = styled.div`
  width: 295px;
  margin: 10px;
`;

const UserInfoBox = styled.div`
  display: flex;
  width: 285px;
  margin: 5px;
`;

const UserImg = styled.img`
  width: 36px;
  height: 36px;
  background-size: cover;
`;

const UserName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 10px 0px 10px;
  font-size: 16px;
  font-weight: bold;
`;

const UserGrade = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  color: #a1a1a1;
`;

const ImgBox = styled.div`
  position: relative;
  width: 295px;
  height: 295px;
  background-color: #d9d9d9;
  border-top-left-radius: 50px;
  border-bottom-right-radius: 50px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 50px;
    border-bottom-right-radius: 50px;
  }
`;

const PostType = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 3px 10px;
  background-color: black;
  color: white;
  border-radius: 20px;
  font-size: 9px;
  z-index: 100;
`;

const LikeCommentBox = styled.div`
  display: flex;
  width: 295px;
  padding: 5px;
`;

const LikesCountBox = styled.div`
  margin: 0px 20px 0px 5px;
`;

const CommentsCountBox = styled.div`
  margin: 0px 20px 0px 5px;
`;

export default Feed;
