export type BlogsData = {
    contents: [
    {
        id: string;
        title: string;
        createdAt: string;
        image: BlogImage;
        category: [];
    }
    ];
        totalCount: number;
        offset: number;
        limit: number;
    };

    export type BlogImage = {
        image: string;
        height: number;
        width: number;
};