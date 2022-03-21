export default {
    name: "projects",
    title: "Projects",
    type: "document",
    fields: [
        {
            name:"projectTitle",
            title:"Project Title",
            type:"string"
        },
        {
            name:"projectLink",
            title:"Project Link",
            type:"string"
        },
        {
            name:"codeLink",
            title:"Code Link",
            type:"string"
        },
        {
            name:"imgUrl",
            title:"ImageURL",
            type:"image",
            options:{
                hotspot: true,
            }
        }
    ]
}