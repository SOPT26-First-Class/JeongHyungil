# User Table

| userIdx | name | id | password |
|------|-------|-------|---------|
| 1 | 정형일 |  junghyungil | 1234 |


# Article Table

| articleIdx | author | title | content | likes | comment | tag | createdAt |
|-----|--------|---------|-------|--------|----------|----------|-------------|
| 1 |  정형일 |  데이터 | 베이스 | 좋아요 | 댓글 | tag |  2020-01-01 | 


# Comment Table 

| commentIdx | author | content | createAt |
|-----|----------|---------|---------|
|  1  | 저자 | 내용 | 2020-05-23 |


# like Table

| userIdx | articleIdx |
|---------|------------|
|    1    |     1      |