USE soptSeminal;

SELECT * FROM user;

/-- user 데이터의 개수 --/
SELECT COUNT(*) FROM user;
SELECT name FROM user ORDER BY name DESC;
SELECT name, email FROM user WHERE userIdx='4';

/-- INSERT 의 두 가지 방법 비교해보기 --/
insert into soptseminar.user (name, password, email, phone) values('e', '123', 'a@naver.com', '01012341234'); 
/-- 필수 데이터를 다 넣어주었을 때에만 가능 --/
insert into soptseminar.user values(22, 'easdad', 'asdsasad', 'aasd@naver.com', '01012341234'); 

/-- 특정 Idx를 찾고 해서 사용자의 이름 바꾸기 --/
UPDATE user SET name='gngsn' WHERE userIdx='3';

SELECT * FROM user WHERE userIdx='3';

/-- 특정 Idx를 찾아서 사용자를 지우기 --/
DELETE FROM user WHERE userIdx='4';
SELECT * FROM user WHERE userIdx='3';