import openai from "./chatgpt";


const query = async (prompt: string, chatId: string, model: string) => {
    
    const res = await openai.createCompletion({
        model,
        prompt,
        temperature: 0.9,
        top_p: 1,
        max_tokens: 1000,
        frequency_penalty: 0,
        presence_penalty: 0,

    })
    .then((res) => res.data.choices[0].text)
    .catch(
        (err) =>
        `Chat GPT was unable to find an answer for your quesstion!(Error: ${err.message})`
        
    )

    return res

}

export default query;