export default {
    name: "services",
    title: "Services",
    type: "document",

    fields: [
        {
            name: "service",
            title: "Service",
            type:"string"
        },
        {
            name: "description",
            title: "Description",
            type:"string"
        },
        {
            name: "imgUrl",
            title: "ImageURL",
            type:"image",
            options: {
                hotspot: true,
            }
        },
    ]
}