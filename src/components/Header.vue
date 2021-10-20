<template>
<!-- Header -->
    <header class="relative header-bg">

        <!-- Decorative emoji -->
        <img src="@/assets/img/image272.png" alt="explode" class="hidden md:block absolute top-0 right-0">
        <img src="@/assets/img/image1342.png" alt="trophy" class="hidden md:block absolute -bottom-12 left-0">
        <img src="@/assets/img/image1411.png" alt="trophy" class="hidden md:block absolute -bottom-12 right-0">

        <!-- Decorative lights -->
        <img src="@/assets/img/Ellipse22.png" alt="lights" class="hidden md:block absolute left-0 top-16">
        <img src="@/assets/img/Ellipse24.png" alt="lights" class="hidden md:block absolute left-44 xl:left-96 top-0">
        <img src="@/assets/img/Ellipse21.png" alt="lights" class="hidden md:block absolute right-0 top-44">


        <!-- Decorative line -->
        <div class="w-full h-3 bg-gradient-pink"></div>

        <div class="container mx-auto px-6">
            <!-- Navbar -->
            <nav class="mt-6 flex items-center justify-between py-3">
                <a href="#" class="flex">
                    <img src="@/assets/img/near_logo_stack_1.png" alt="" class="border-r-2 border-white">
                    <div class="ml-2">
                        <p class="text-gradient-blue text-2xl font-bold tracking-tight">Memes</p>
                        <p class="-mt-2 font-josefin text-white text-2xl">museum</p>
                    </div>
                </a>
                <div class="flex items-center space-x-3">
                    <div href="#" class="flex items-center">
                        <div class="flex items-center justify-center w-14 h-14 rounded-full bg-white">
                            <img src="@/assets/img/near_logo_stack2.png" alt="">
                        </div>
    
                        <div v-if="accountId" class="">
                            <p class="ml-4 text-white text-sm md:text-xl font-bold">{{accountId}}</p>
                            <button @click="signOut" class="text-gradient-blue">Log out</button>
                        </div>
                        <div v-else>
                             <button @click="signIn" class="ml-4 text-white text-sm md:text-xl font-bold">Log in with
                             <span class="text-gradient-blue">NEAR Wallet</span>
                             </button>
                        </div>
    
                    </div>
                </div>
            </nav>
                </div>

            <!-- Offer -->
            <div class="pb-24 xl:pb-40 2xl:pb-48">
                <div class="lg:mt-3 2xl:mt-14 text-center">
                    <h1 class="flex justify-center items-baseline space-x-2 text-4xl lg:text-6xl 2xl:text-8xl text-white font-bold">
                        <img src="@/assets/img/image1123.png" alt="pig" class="w-9 lg:w-20 h-9 lg:h-20 mr-3 -pb-4">
                        Meme Museum 
                        <span class="inline-block rounded-sm bg-gradient-blue w-2 md:w-5 h-2 md:h-5"></span>
                    </h1>
                    <p class="mt-2 2xl:mt-4 text-white text-base md:text-2xl tracking-wide">
                        Share your favorite MEME. Comment, vote and <br class="hidden lg:block"> engage with all the cool memes
                    </p>
                </div>
                <Form @submit="handleSubmit" :validation-schema="schema" class="mt-14 w-full flex flex-col lg:flex-row justify-center items-baseline lg:space-x-">
                
                        <div v-for="field in formFields" :key="field.id" class="mt-4 lg:mt-0">
                            <p :for="field.id" class="text-gray-400 pl-4">{{field.label}}</p>
                            <Field
                                        :v-model="field.id"
                                        type="text"
                                        :name="field.id"
                                        :id="field.id"
                                        :placeholder="field.label"
                                        class="w-64 lg:w-44 xl:w-64 mt-2 py-3 rounded-md border-2 border-gray-900 focus:border-blue-600 outline-none pl-6"/>
                                        <ErrorMessage :name="field.id" class="w-64 text-red-500" />
                        </div>
                        
                        <div class="mt-4 lg:mt-0">
                            <p class="text-gray-400 pl-4 lg:pl-0">Category</p>
                            <Field as="select" class="w-16 mt-2 py-3 rounded-md border-2 border-gray-900 focus:border-blue-600 outline-none px-3"
                            v-model="category"
                            name="category"
                            id="category">
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </Field>
                        </div>
                        <button class="mt-4 lg:mt-0">
                            <p class="hidden lg:block text-transparent">buttons</p>
                            <a class="inline-block mt-2 w-64 lg:w-44 xl:w-64 py-3 bg-gradient-to-r from-blue-500 hover:from-white active:from-gray-200 to-blue-600 hover:to-white active:to-gray-200 text-white hover:text-blue-600 text-center font-semibold rounded-md">Send</a>
                        </button>
                </Form>
            </div>
    </header>
</template>

<script>
import { wallet, CONTRACT_ID } from "@/services/near";
import { ref, watchEffect } from "vue";
import { useForm, useField, Form, Field, ErrorMessage } from "vee-validate";

export default {
    props: {
        addMeme: {
            type:Function,
            required:true,
        },
        memes: {
            type:Array,
            required:true,
        }
    },
    components: {
        Form,
        Field,
        ErrorMessage
    },
    setup(props) {
        const accountId = wallet.getAccountId();
        const memesIds = ref();
        watchEffect(() => {
            memesIds.value = props.memes.map((meme) => {
                return meme.id
            });
        });

        const schema = {
            meme(value) {
                if (!value) {
                    return "This  field is required";
                }
                if (value.length < 2) {
                    return "minimum length is 2";
                } 
                if (value === memesIds.value.find((id) => id === value)) {
                    return "This meme is already taken, please choose another one";
                }
                if (
                    // eslint-disable-next-line
                    !/^(([a-z\d]+[\-_])*[a-z\d]+\.)*([a-z\d]+[\-_])*[a-z\d]+$/.test(value)
                ) {
                    return "This memeId doesn't follow  the NEAR Protocol account naming system";
                }
                return  true;
            },
            title(value) {
                if (!value) {
                    return "This  field is required";
                }
                if (value.length < 2) {
                    return "minimum length is 2";
                } 
                return  true;
            },
            data(value) {
                if (
                    // eslint-disable-next-line
                    !/(https:|http:)+(\/\/)+(9gag\.com\/gag\/)+\S/.test(value)
                ) {
                    return "This should be a 9gag link";
                }
                return true;
            },
        };

        useForm({
            validationSchema: schema
        });

        // eslint-disable-next-line no-unused-vars
        const { value: meme, errorMessage: memeError } = useField("meme");
        // eslint-disable-next-line no-unused-vars
        const { value: title, errorMessage: titleError } = useField("title");
        // eslint-disable-next-line no-unused-vars
        const { value: data, errorMessage: dataError } = useField("data");

        const category =  ref(0);

        const  handleSubmit = (values) => {
            props.addMeme(values)
        }

        const  formFields = [
            {
                label: "Meme  name",
                id: "meme",
            },
            {
                label: "Title",
                id: "title",
            },
            {
                label:"9gag Link",
                id: "data",
            },
        ];

        return {
            accountId,
            schema,
            category,
            handleSubmit,
            formFields,
            signIn: () => wallet.requestSignIn(CONTRACT_ID),
            signOut: () => {
                wallet.signOut();
                window.location.reload();
            }
        }
    }
}
</script>