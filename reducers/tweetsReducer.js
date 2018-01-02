
const initialState={
    error:'Success!',
    data:[
        {
            "created_at":"Thu Apr 06 15:24:15 +0000 2017",
            "id": 5744,
            "id_str": "850006245121695744",
            "text": "1/ Today we’re sharing our vision for the future of the Twitter API platform!nhttps://t.co/XweGngmxlP",
            "user": {},
            "entities": {}
        },
        {
            "created_at":"Thu Apr 06 15:24:15 +0000 2017",
            "id": 5741,
            "id_str": "850006245121695744",
            "text": "1/ Today we’re sharing our vision for the future of the Twitter API platform!nhttps://t.co/XweGngmxlP",
            "user": {},
            "entities": {}
        },
        {
            "created_at":"Thu Apr 06 15:24:15 +0000 2017",
            "id": 5742,
            "id_str": "850006245121695744",
            "text": "1/ Today we’re sharing our vision for the future of the Twitter API platform!nhttps://t.co/XweGngmxlP",
            "user": {},
            "entities": {}
        },
        {
            "created_at":"Thu Apr 06 15:24:15 +0000 2017",
            "id": 5743,
            "id_str": "850006245121695744",
            "text": "1/ Today we’re sharing our vision for the future of the Twitter API platform!nhttps://t.co/XweGngmxlP",
            "user": {},
            "entities": {}
        }
    ]
}

export default function reducer(state=initialState,action) {
    switch (action.type){
        default:{
            return state
        }
    }
}
