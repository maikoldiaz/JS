const question = {
    _id: 1,
    title: "¿como reutilizo componentes en android",
    description: "me gustaria saber como reutilizar componentes del tipo popup",
    createdAt: new Date(),
    icon: "devicon-android-plain",
    answers: [],
    user: {
        firstName: "Maikol",
        lastName: "Diaz",
        email: "maikol@diaz.com",
        password: "123456"
    }
}


const questions = new Array(10).fill(question);

export const questionsMiddleware = (req, res, next) => {
    req.questions = questions;
    next();
}

export const questionMiddleware = (req, res, next) => {
    const { id } = req.params;
    req.question = questions.find(({ _id }) => _id === +id);
    next();
}