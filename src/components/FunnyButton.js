import { motion, useAnimationControls } from 'framer-motion';
import AnimatedDiv from './global/AnimatedDiv';

export default function FunnyButton() {
    const animateAzumanga = useAnimationControls();
    const animateSmall = useAnimationControls();
    const variants = {
        active: {
            opacity: 1, y: 0,
            transition: { type: "spring", bounce: 0.6, duration: 1.5}
        },
        initial: { opacity: 0, y: 30 },
    }
    const audio = new Audio("/americaya.mp3");

    async function triggerAnimation() {
        audio.play();
        await animateAzumanga.start("active");
        await animateSmall.start("active")
        await animateAzumanga.start({ rotate: 360, transition: { duration: 1.5} });
        animateSmall.start({ opacity: 0, y: 30 });
        animateAzumanga.start({ opacity: 0, y: 30 });
    }

    return (
        <div>
            <AnimatedDiv delay={0.6}>
                <div onClick={() => triggerAnimation()} class="flex bg-teal-500 text-zinc-900 text-lg font-bold rounded-lg justify-center items-center h-10 min-w-32 cursor-pointer duration-200 hover:bg-zinc-700 hover:text-teal-500"> Submit </div>
            </AnimatedDiv>
            <div className='flex flex-row'>
                <motion.div className='fixed -bottom-28 left-10' initial="initial" animate={animateAzumanga} variants={variants} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="250" height="335.968" viewBox="0 0 187.5 251.977" transform="scale(-1 1)">
                    <path d="M94.862 5.707c-5.262 0.667 -12.154 2.52 -17.49 4.743 -4.15 1.705 -6.299 3.187 -8.819 6.003C66.7 18.528 65.217 20.751 65.217 21.492c0 0.815 -0.296 1.63 -0.741 1.853 -0.371 0.222 -0.741 0.815 -0.741 1.26 0 0.889 0.593 0.741 7.782 -2.075 2.89 -1.038 6.966 -2.075 9.116 -2.223 3.483 -0.148 3.928 -0.074 3.483 1.038 -0.963 2.52 -3.261 11.784 -3.706 15.119 -0.445 3.113 -0.741 3.557 -2.372 3.557 -0.963 0 -3.113 0.667 -4.669 1.482 -1.63 0.815 -2.964 1.26 -2.964 1.038 0 -0.889 5.336 -10.153 9.042 -15.786 2.001 -2.964 3.483 -5.632 3.261 -5.855 -1.334 -1.26 -14.97 4.224 -16.823 6.818 -0.296 0.371 -0.889 0.371 -1.408 0.074 -0.593 -0.371 -0.815 -0.296 -0.445 0.222 0.222 0.445 0 1.038 -0.593 1.408 -2.001 1.112 -6.225 7.337 -6.966 10.301 -2.668 10.079 -6.818 50.544 -6.818 66.033 0 8.967 0.889 13.71 3.78 20.158 2.446 5.41 2.594 6.225 1.038 7.485 -0.889 0.741 -1.112 0.667 -1.112 -0.445 0 -0.815 -0.296 -1.853 -0.667 -2.446 -0.593 -0.889 -1.334 -0.445 -3.928 2.149 -1.779 1.779 -3.409 3.261 -3.706 3.335 -1.038 0 -2.001 1.556 -2.223 3.557 -0.222 1.186 -0.741 2.372 -1.26 2.742 -0.593 0.296 -0.741 0.963 -0.445 1.482 0.296 0.445 -0.074 1.482 -0.741 2.223 -0.741 0.815 -1.334 2.446 -1.408 3.706 -0.074 1.186 -0.371 2.223 -0.667 2.223 -0.371 0 -0.371 0.667 -0.148 1.482 0.296 0.889 0.148 1.482 -0.371 1.482s-0.741 0.519 -0.445 1.112c0.222 0.593 0.074 1.112 -0.296 1.112 -0.445 0 -0.741 0.593 -0.741 1.408 0 0.741 -1.63 2.89 -3.706 4.817 -2.594 2.446 -3.78 4.224 -4.15 6.077s-0.222 2.594 0.296 2.223c0.445 -0.222 0.296 0.519 -0.296 1.779 -0.667 1.186 -0.889 2.594 -0.593 3.039 0.296 0.593 0.222 0.667 -0.296 0.371s-0.889 -0.074 -0.889 0.667c0 0.667 -0.296 1.038 -0.667 0.741 -0.815 -0.445 -3.187 2.52 -2.668 3.409 0.222 0.296 -0.815 0.741 -2.223 0.963 -1.705 0.371 -2.594 0.963 -2.594 1.705 0 1.408 -1.408 2.594 -5.707 4.817 -2.742 1.408 -3.187 1.927 -3.631 4.817 -0.222 1.779 -0.296 5.188 0 7.485 0.222 2.297 0.519 6.892 0.667 10.153 0.074 3.261 0.371 6.003 0.741 6.077 1.038 0.371 2.594 2.075 2.52 2.816 -0.074 0.371 0.296 0.667 0.815 0.519 0.445 -0.074 0.815 0.148 0.741 0.519 -0.148 0.371 0.889 1.853 2.223 3.335s2.149 2.668 1.853 2.668c-0.371 0 -0.074 0.371 0.519 0.741s1.112 1.112 1.112 1.63c0 0.667 1.408 0.963 4.817 0.963s4.743 -0.296 4.669 -0.889c-0.148 -0.519 0.296 -0.741 0.889 -0.519 0.593 0.296 1.112 0.074 1.112 -0.371s0.445 -0.593 1.038 -0.371c0.667 0.222 0.963 1.482 0.889 3.631 0 1.779 -0.371 3.039 -0.741 2.742 -0.371 -0.222 -0.519 0.371 -0.296 1.186 0.296 1.038 0.148 1.482 -0.296 1.186 -0.519 -0.371 -0.667 0.296 -0.445 1.779 0.222 1.408 0.074 2.149 -0.445 1.853 -0.371 -0.296 -0.519 0.074 -0.222 0.741 0.222 0.741 0.222 1.26 -0.148 1.26 -0.741 0 -2.372 5.929 -1.853 6.818 0.222 0.296 0 0.593 -0.371 0.593 -0.445 0 -0.815 0.296 -0.815 0.741 0 0.519 15.637 0.741 45.504 0.741 39.723 0 45.578 -0.148 45.949 -1.112 0.222 -0.593 0.222 -1.63 0 -2.223 -0.296 -0.741 0 -1.112 1.112 -1.112s1.853 0.667 2.372 2.223l0.815 2.223H159.338v-2.816c0 -1.556 -0.148 -3.039 -0.371 -3.261s-0.593 -4.002 -0.741 -8.449 -0.741 -13.118 -1.26 -19.343c-0.593 -6.151 -0.741 -11.043 -0.445 -10.894 0.296 0.222 0.741 -0.815 1.038 -2.297 0.519 -3.039 -0.963 -9.19 -2.372 -9.783 -1.112 -0.371 -0.963 0.519 -1.482 -14.155 -0.222 -6.151 -0.667 -11.117 -0.889 -10.968 -0.296 0.148 -0.519 -1.927 -0.593 -4.595 0 -2.964 -0.371 -4.965 -0.889 -5.188 -0.519 -0.148 -0.667 -1.112 -0.371 -2.52 0.296 -1.482 0.148 -2.149 -0.296 -1.853s-0.593 -0.296 -0.371 -1.482c0.296 -1.408 0.148 -1.779 -0.593 -1.334q-1 0.556 -0.445 -0.222c0.296 -0.445 0.074 -1.63 -0.445 -2.52 -0.445 -0.963 -0.963 -2.075 -0.963 -2.446 -0.371 -2.52 -1.408 -5.558 -1.927 -5.558 -0.371 0 -0.667 -0.519 -0.667 -1.186s-0.371 -0.889 -0.889 -0.593c-0.445 0.296 -0.593 0.222 -0.371 -0.296 0.296 -0.371 0.296 -1.334 0.074 -2.001 -0.371 -0.963 -0.593 -1.038 -1.112 -0.222 -0.445 0.667 -0.667 0.371 -0.667 -1.038 0 -1.112 -0.371 -2.223 -0.889 -2.52q-0.778 -0.556 -0.222 0.445c0.556 1 0.296 0.815 -0.222 0.445 -0.593 -0.371 -0.296 -1.705 0.889 -4.447 4.521 -10.153 5.929 -22.678 5.41 -46.393 -0.445 -17.49 -1.705 -30.163 -3.854 -37.796 -0.667 -2.223 -1.186 -4.447 -1.26 -4.965s-0.445 -0.667 -0.815 -0.445c-0.445 0.296 -0.593 0 -0.296 -0.741 0.222 -0.667 0.222 -1.186 -0.074 -1.038 -0.296 0.074 -2.742 -2.075 -5.484 -4.743 -5.336 -5.188 -13.192 -9.783 -20.899 -12.228 -2.446 -0.741 -4.076 -1.408 -3.631 -1.556 0.371 -0.148 3.187 0.593 6.225 1.705 14.674 5.188 17.416 5.41 15.563 1.26l-0.963 -2.075 1.705 1.482 1.705 1.482 -1.63 -2.297c-7.708 -11.117 -24.901 -18.602 -38.686 -16.823m4.15 18.157c1.927 3.409 4.298 7.633 5.336 9.486s2.297 3.854 2.89 4.521c0.815 0.963 0.593 1.334 -1.63 2.372 -1.408 0.667 -2.594 1.63 -2.594 2.001 0 0.445 0.371 0.593 0.741 0.371 0.963 -0.593 0.963 -0.593 -0.371 2.964 -1.038 3.039 -1.482 11.858 -0.667 14.081 0.445 1.038 0.593 0.963 1.556 -0.371 1.63 -2.372 6.892 -1.853 6.892 0.741 0 1.779 -1.853 3.113 -4.15 3.113 -2.594 0 -1.334 1.112 2.001 1.705 5.188 0.963 8.819 -4.224 8.819 -12.599 0 -2.075 -0.296 -4.817 -0.741 -6.151 -0.593 -2.149 -0.519 -2.372 0.371 -1.63 0.593 0.445 1.408 2.001 1.853 3.409 0.445 1.334 1.186 2.446 1.63 2.297 1.334 -0.222 2.372 6.077 1.408 9.042 -0.815 2.816 -0.519 3.78 0.815 2.446 1.779 -1.779 1.556 -7.782 -0.445 -12.525 -1.408 -3.409 -1.927 -5.855 -1.853 -9.264v-4.669l2.52 6.299c2.52 6.299 2.52 6.374 2.52 18.528 0 6.744 -0.296 15.86 -0.593 20.232 -0.667 8.004 -0.667 8.078 -3.483 10.968 -5.855 6.003 -19.936 12.525 -27.125 12.525 -4.743 0 -7.411 -0.963 -15.711 -5.707 -9.338 -5.336 -17.564 -13.118 -19.046 -17.861 -0.815 -2.742 -0.741 -4.224 0.371 -10.005 0.741 -3.78 1.482 -10.524 1.63 -14.97 0.519 -10.376 0.519 -10.45 3.706 -14.822l2.668 -3.706 -0.519 5.188c-0.296 2.816 -1.186 7.189 -2.001 9.56 -0.963 2.964 -1.26 5.262 -0.963 6.966 0.593 3.261 1.482 2.372 1.26 -1.186 -0.296 -3.409 3.78 -11.784 6.522 -13.414l1.853 -1.112 -1.334 1.556c-2.149 2.52 -3.409 6.818 -3.483 11.858 0 4.891 0.519 5.632 2.075 3.113 1.186 -1.853 4.447 -1.705 5.632 0.296 0.667 1.112 0.519 1.63 -0.963 2.816 -0.963 0.815 -2.297 1.26 -2.816 1.038 -0.667 -0.222 -0.963 0 -0.815 0.519 0.445 1.26 2.816 1.556 5.262 0.667 3.409 -1.334 4.521 -4.669 4.521 -13.562 0.074 -4.817 0.371 -8.004 0.815 -8.004 0.445 -0.074 0 -0.667 -0.889 -1.408 -1.705 -1.408 -2.223 -3.039 -1.038 -3.039 0.371 0 0.815 -0.741 1.112 -1.705 0.222 -0.889 2.594 -4.891 5.262 -8.893s4.817 -7.485 4.817 -7.633c0 -0.222 -0.741 -0.667 -1.63 -1.038l-1.705 -0.667h1.705c0.889 -0.074 1.63 0.296 1.63 0.815 0 0.593 0.445 0.445 1.26 -0.371 0.741 -0.667 1.334 -1.26 1.482 -1.26 0.074 0 1.705 2.742 3.631 6.077m6.003 -4.373c0.296 0.519 -0.371 0.593 -2.001 0.296 -1.334 -0.296 -3.261 -0.519 -4.373 -0.519 -1.186 0 -1.556 -0.222 -1.038 -0.593 1.186 -0.741 6.818 -0.148 7.411 0.815m-16.601 0.296c-0.519 0.148 -1.408 0.148 -1.853 0 -0.519 -0.222 -0.148 -0.371 0.889 -0.371s1.408 0.148 0.963 0.371m21.27 0.667c0 0.148 -0.667 0.296 -1.482 0.296s-1.482 -0.296 -1.482 -0.667 0.667 -0.519 1.482 -0.296 1.482 0.519 1.482 0.667m2.223 14.452c-0.963 0.667 -0.889 0.741 0.148 0.371 0.963 -0.296 1.705 0.371 2.816 2.668 0.815 1.705 1.482 3.187 1.482 3.335 0 0.074 -1.112 -0.296 -2.372 -0.963 -2.149 -1.038 -2.594 -1.705 -3.78 -6.448 -2.149 -8.967 -2.149 -9.19 0.371 -4.373 2.075 4.002 2.297 4.743 1.334 5.41m2.001 64.625c-0.222 0.593 -0.593 3.261 -0.889 5.929l-0.519 4.965h1.927c1.334 0 1.779 0.296 1.482 1.112 -0.296 0.593 -1.038 1.112 -1.705 1.186q-1.112 0 -0.222 0.445c0.445 0.148 0.741 0.667 0.445 1.038 -0.741 1.26 -1.705 0.667 -2.001 -1.408 -0.222 -1.112 -0.296 -0.371 -0.222 1.705 0.074 2.89 -0.148 3.706 -1.112 3.706 -1.112 0 -11.413 7.411 -13.192 9.486 -0.519 0.667 -1.408 0.963 -2.001 0.741s-1.038 0.074 -1.038 0.667c0 1.334 -13.785 14.377 -14.896 14.081 -0.445 -0.074 -0.593 0.148 -0.371 0.519 0.445 0.741 -1.334 2.52 -1.927 1.927 -0.148 -0.222 -0.371 0.148 -0.371 0.815 0 1.112 0.815 1.186 6.151 0.741 3.409 -0.222 7.856 -0.815 9.857 -1.26 4.224 -0.889 4.298 -1.038 4.817 -10.82 0.296 -4.669 1.705 -9.634 2.001 -7.115 0.074 0.519 0.148 1.186 0.222 1.482 0.222 1.26 1.63 2.89 3.409 4.076 3.335 2.149 6.744 5.781 6.299 6.522 -0.296 0.445 -0.222 0.741 0.148 0.667 1.63 -0.296 2.297 0.222 1.927 1.482 -0.371 1.408 -3.187 1.927 -3.187 0.593 0 -0.296 -0.222 -0.445 -0.519 -0.296 -0.741 0.371 -2.742 -1.779 -3.039 -3.261 -0.148 -0.593 -0.741 -1.482 -1.26 -2.075 -0.815 -0.889 -1.26 -0.889 -2.149 -0.074 -0.889 0.667 -1.186 2.372 -1.186 6.299 0 5.04 -0.074 5.41 -1.482 5.04 -0.815 -0.222 -4.447 0.148 -8.152 0.815 -3.706 0.741 -9.486 1.334 -12.895 1.408s-6.077 0.296 -6.003 0.519c0.148 0.222 -0.667 0.445 -1.853 0.371 -1.112 0 -1.927 -0.222 -1.705 -0.593 0.148 -0.296 -0.222 -0.741 -0.963 -1.038 -0.667 -0.222 -2.149 -1.408 -3.261 -2.594 -1.112 -1.112 -2.149 -1.853 -2.372 -1.63 -0.296 0.222 -0.371 -0.074 -0.371 -0.741 0.074 -0.593 -0.148 -1.112 -0.519 -1.112 -0.815 0.074 -1.927 -1.63 -1.927 -2.89 0 -0.445 1.26 0.445 2.742 2.149 1.482 1.63 4.224 4.002 6.003 5.262 3.631 2.52 4.965 1.927 4.15 -1.853 -0.222 -1.26 -0.074 -2.001 0.445 -2.001s0.667 -0.593 0.371 -1.556c-0.371 -1.186 -0.296 -1.408 0.371 -1.038 0.741 0.445 0.889 0 0.519 -1.927s-0.296 -2.223 0.296 -1.408c0.593 0.889 0.667 0.519 0.371 -1.334 -0.222 -1.26 -0.148 -2.372 0.222 -2.372 0.296 0 0.593 -1.038 0.593 -2.297s0.371 -2.52 0.963 -2.89c0.519 -0.296 0.741 -0.889 0.519 -1.26 -0.593 -0.963 1.26 -7.041 2.001 -6.374 0.296 0.296 0.296 0 0.074 -0.667 -0.296 -0.667 -0.148 -1.408 0.296 -1.63 0.445 -0.296 0.519 -1.038 0.296 -1.705 -0.296 -0.815 -0.222 -1.038 0.371 -0.667s0.815 0.074 0.741 -0.815c-0.222 -2.52 0.148 -4.002 0.815 -3.557 0.371 0.222 0.889 0.074 1.186 -0.371 0.445 -0.667 -0.593 -1.038 -2.075 -0.815 -0.371 0.074 -0.445 -0.222 -0.148 -0.667 0.593 -0.889 5.558 -1.038 5.558 -0.074 0 0.371 -0.519 1.038 -1.112 1.556 -1.26 1.038 -1.556 2.594 -0.371 1.853 0.445 -0.222 0.741 0 0.815 0.519 0.222 2.52 1.26 -3.261 1.334 -7.115 0.074 -3.631 0.296 -4.224 1.26 -3.854 5.04 1.927 13.414 0.667 21.047 -3.187 4.817 -2.446 5.484 -2.594 4.965 -1.334m-44.022 20.455c-0.741 0.889 -1.779 -1.63 -2.075 -5.188l-0.371 -4.002 1.408 4.447c0.741 2.446 1.26 4.595 1.038 4.743m48.32 -7.263c-0.296 0.371 -0.889 0.667 -1.334 0.593 -0.667 0 -0.593 -0.148 0.074 -0.445 0.445 -0.148 0.667 -0.741 0.445 -1.112 -0.296 -0.519 -0.148 -0.593 0.371 -0.296 0.445 0.296 0.667 0.889 0.445 1.26m-38.908 0.889c0 0.148 -0.741 0.889 -1.63 1.705l-1.705 1.408 1.408 -1.705c1.334 -1.556 1.927 -2.001 1.927 -1.408m40.316 0.371c0.222 0.371 -0.074 0.667 -0.667 0.667s-0.889 -0.296 -0.667 -0.667c0.222 -0.296 0.519 -0.593 0.667 -0.593s0.445 0.296 0.667 0.593m0.222 4.002c-0.222 0.593 -0.445 0.371 -0.445 -0.445 -0.074 -0.815 0.148 -1.26 0.371 -0.963 0.222 0.222 0.296 0.889 0.074 1.408m19.565 5.41c-0.445 3.557 -0.963 6.67 -1.186 6.892s0.148 1.038 0.889 1.779c1.112 1.26 1.112 1.334 -0.296 1.334 -2.223 0 -6.225 1.556 -5.781 2.223 0.222 0.296 -0.222 0.445 -0.963 0.222 -0.815 -0.148 -1.853 0.148 -2.446 0.741 -0.593 0.519 -2.001 1.26 -3.187 1.556l-2.149 0.519 1.853 -2.149c1.038 -1.186 2.594 -4.15 3.557 -6.522 0.963 -2.446 1.853 -4.521 2.001 -4.669 0.148 -0.222 1.038 0.445 2.075 1.408s1.927 1.63 2.075 1.408c0.667 -0.815 2.594 -6.522 3.039 -9.116 0.963 -5.04 1.26 -2.297 0.519 4.373M58.177 128.953c3.335 5.41 3.483 5.781 1.482 5.41 -0.963 -0.222 -1.927 -0.889 -2.149 -1.556 -1.853 -5.336 -2.668 -8.152 -2.594 -9.412 0 -1.112 0.296 -0.889 0.815 0.741 0.445 1.186 1.556 3.409 2.446 4.817m48.172 -5.188c-0.222 0.371 -0.889 0.741 -1.334 0.741 -0.519 0 -0.445 -0.296 0.222 -0.741 1.408 -0.889 1.705 -0.889 1.112 0m10.672 0.963c0.889 1.112 0.889 1.26 -0.222 0.815 -0.667 -0.222 -1.186 -0.963 -1.186 -1.63 0 -0.593 0.074 -0.963 0.222 -0.815 0.074 0.148 0.667 0.889 1.186 1.63m10.82 2.89c-1.408 4.669 -4.447 11.487 -5.707 12.895 -0.963 1.112 -2.001 1.482 -3.335 1.186 -1.26 -0.222 -1.779 -0.074 -1.408 0.445 0.222 0.445 0.148 0.963 -0.148 1.186 -1.334 0.815 -0.519 -2.149 0.963 -3.631 0.815 -0.815 3.335 -4.224 5.558 -7.559s4.15 -6.077 4.298 -6.151c0.148 0 0 0.741 -0.222 1.63M57.065 134.585c0 0.148 -0.519 0.296 -1.112 0.296s-1.112 -0.296 -1.112 -0.741c0 -0.371 0.519 -0.519 1.112 -0.296 0.593 0.296 1.112 0.593 1.112 0.741m5.336 2.668c-0.519 0.519 -1.482 0.963 -2.149 1.038 -1.038 0.148 -0.889 -0.148 0.519 -1.186 1.927 -1.482 3.113 -1.334 1.63 0.148m39.649 9.634c-0.222 0.519 -0.371 0.148 -0.371 -0.889s0.148 -1.408 0.371 -0.963c0.148 0.519 0.148 1.408 0 1.853m-8.152 3.261c-0.222 0.222 -0.889 0.296 -1.408 0.074 -0.593 -0.222 -0.371 -0.445 0.445 -0.445 0.815 -0.074 1.26 0.148 0.963 0.371m-11.413 1.556c-0.519 0.148 -1.408 0.148 -1.853 0 -0.519 -0.222 -0.148 -0.371 0.889 -0.371s1.408 0.148 0.963 0.371m-34.758 13.266c0.222 0.593 0.148 0.889 -0.296 0.667s-0.741 -0.741 -0.741 -1.186c0 -1.038 0.519 -0.815 1.038 0.519m-4.447 1.927c-0.222 0.296 -0.889 0.593 -1.482 0.593s-1.038 0.371 -1.038 0.741c0 0.445 0.889 0.593 2.075 0.296l2.001 -0.445 -2.223 1.26c-2.668 1.408 -4.224 3.261 -3.557 4.298 0.222 0.445 0.074 0.519 -0.371 0.222 -0.445 -0.222 -0.667 -1.186 -0.519 -2.001 0.222 -1.26 0 -1.408 -1.334 -0.963 -1.26 0.296 -1.038 0 0.741 -1.334 1.334 -1.038 2.149 -2.149 1.853 -2.446 -0.296 -0.371 -0.148 -0.371 0.296 -0.148s1.26 -0.222 1.779 -0.963c0.741 -1.038 1.186 -1.186 1.556 -0.593 0.296 0.519 0.371 1.186 0.222 1.482m2.297 -1.038c-0.222 0.222 -0.815 0 -1.334 -0.519 -0.667 -0.741 -0.593 -0.815 0.445 -0.371 0.741 0.222 1.112 0.667 0.889 0.889m4.965 2.001c-0.593 1.186 -0.667 1.186 -1.112 0.074 -0.296 -0.741 -0.222 -1.112 0.222 -0.815 0.445 0.222 0.741 0.074 0.741 -0.445s0.222 -0.741 0.445 -0.445c0.222 0.222 0.148 0.963 -0.296 1.63m-2.075 0.074c0.296 0.741 -0.222 1.334 -1.779 1.927 -1.26 0.371 -2.001 1.038 -1.779 1.408s-0.148 0.445 -0.741 0.222c-1.482 -0.593 -1.556 -1.779 -0.074 -1.779 0.593 0 1.408 -0.667 1.853 -1.482 0.963 -1.779 1.927 -1.927 2.52 -0.296m3.409 2.89c-0.667 0.815 -0.667 1.112 -0.074 1.112 0.445 0 1.038 -0.519 1.26 -1.112 0.445 -1.038 0.593 -0.963 1.408 0.148 0.667 0.963 0.741 1.63 0.222 2.223 -0.519 0.667 -0.519 0.963 0.074 0.963 1.779 0 0.667 1.556 -1.408 2.001 -2.594 0.519 -3.409 1.334 -1.853 2.001 0.593 0.222 1.112 0.074 1.112 -0.371s0.296 -0.519 0.741 -0.296c0.371 0.222 1.779 -0.074 3.113 -0.741 2.297 -1.038 2.372 -1.038 0.815 0.074 -0.963 0.667 -1.705 1.779 -1.705 2.446 0 1.038 -0.148 1.038 -0.741 0.074s-0.741 -0.889 -0.741 0.222c0 0.741 -0.519 1.482 -1.112 1.705 -0.667 0.296 -0.889 0.815 -0.593 1.334 0.963 1.334 0.667 3.039 -0.741 4.521 -0.741 0.667 -1.186 1.63 -1.038 2.075 0.371 1.112 2.075 1.556 1.853 0.519 -0.148 -0.519 0.296 -1.112 0.889 -1.26 0.889 -0.296 0.963 -0.222 0.074 0.371 -0.815 0.593 -0.667 0.815 0.593 1.26 0.815 0.222 1.556 0.815 1.556 1.334 0 0.593 -0.222 0.593 -0.889 -0.074 -1.26 -1.26 -2.075 -1.112 -2.075 0.296 0 0.667 0.371 0.889 0.889 0.593s0.593 -0.222 0.296 0.371c-0.296 0.445 -0.815 0.667 -1.186 0.445s-0.815 -0.074 -1.112 0.371 -0.815 0.593 -1.186 0.371c-0.371 -0.296 -0.667 0.222 -0.667 1.038 0 0.741 0.445 1.63 0.963 1.779 0.519 0.222 0.371 0.445 -0.371 0.445 -0.741 0.074 -1.334 0.371 -1.334 0.815 0 1.26 -8.152 0.889 -8.597 -0.371 -0.593 -1.556 -1.705 -1.408 -1.408 0.148 0.148 1.112 -3.854 5.929 -4.447 5.262 -0.371 -0.445 -6.299 -17.416 -6.299 -18.009 0 -0.148 0.519 -0.371 1.112 -0.667 1.26 -0.445 3.335 3.039 2.742 4.669 -0.222 0.667 0 0.815 0.593 0.445q1 -0.556 0.445 0.222c-0.593 0.963 2.149 3.928 2.964 3.261 0.371 -0.296 0.148 0.074 -0.371 0.741 -0.815 1.112 -0.741 1.482 0.222 2.446 1.112 1.112 1.186 1.038 1.26 -0.889 0.074 -1.26 0.222 -1.556 0.445 -0.815 0.371 1.408 1.705 1.853 1.705 0.593 0 -0.445 0.371 -0.741 0.741 -0.741 0.445 0 0.741 0.593 0.593 1.26 -0.148 1.038 0.371 1.334 2.001 1.482 2.149 0.148 2.149 0.148 0.371 -0.519 -1.779 -0.593 -1.779 -0.593 -0.148 -0.667 1.482 -0.074 1.63 -0.445 1.63 -4.447s0.148 -4.447 1.705 -4.669c1.408 -0.222 1.63 -0.667 1.556 -3.335 0 -1.705 0.148 -3.113 0.371 -3.039 1.482 0.148 2.297 -0.296 2.297 -1.26 0 -1.26 -0.815 -1.482 -1.927 -0.371 -1.186 1.186 -4.15 0 -3.78 -1.556 0.445 -1.705 -0.593 -1.853 -1.26 -0.222 -0.296 0.667 0.074 1.853 0.667 2.52 1.038 1.186 1.038 1.334 -0.074 1.779 -0.667 0.222 -1.038 0.889 -0.815 1.408 0.222 0.667 -0.519 0.963 -2.742 1.038 -1.63 0 -3.483 0.148 -4.076 0.296 -0.815 0.222 -1.112 -0.445 -1.038 -2.89 0.074 -5.855 0.148 -6.077 1.705 -6.077 1.26 0 1.482 0.519 1.482 2.964s0.222 2.964 1.482 2.964c2.372 0 2.52 -0.222 2.668 -3.409 0.148 -3.335 0.667 -4.743 1.927 -4.743 0.519 0 0.445 0.445 -0.148 1.112 -0.741 0.889 -0.741 1.112 0.296 1.112 0.667 0 1.186 -0.371 1.186 -0.741 0 -0.445 0.371 -0.741 0.815 -0.741 0.593 0 0.667 0.296 0 0.963 -0.445 0.593 -0.593 1.26 -0.296 1.482 0.222 0.296 0.074 0.519 -0.371 0.519 -1.26 0 -1.112 1.26 0.148 1.705 0.593 0.222 1.927 -0.222 2.89 -1.038 1.038 -0.741 2.446 -1.408 3.261 -1.482 0.963 -0.074 0.815 -0.222 -0.519 -0.593 -1.038 -0.296 -2.223 -1.186 -2.594 -2.075 -0.593 -1.186 -1.112 -1.408 -2.075 -0.889 -0.667 0.445 -1.26 0.519 -1.26 0.296s1.334 -1.038 2.964 -1.779 2.816 -1.482 2.742 -1.705c-0.148 -0.222 0.074 -0.148 0.445 0.222q0.778 0.556 -0.222 1.779m-16.749 3.928c-0.296 1.334 -0.741 2.372 -1.038 2.372 -0.371 0 -0.222 -1.186 0.222 -2.594 0.963 -3.113 1.482 -2.964 0.815 0.222m6.892 -0.148c-0.222 0.222 -0.889 0.296 -1.408 0.074 -0.593 -0.222 -0.371 -0.445 0.445 -0.445 0.815 -0.074 1.26 0.148 0.963 0.371m6.892 0.296c0 0.371 -0.371 0.741 -0.815 0.741 -0.371 0 -0.519 -0.371 -0.296 -0.741 0.222 -0.445 0.593 -0.741 0.815 -0.741 0.148 0 0.296 0.296 0.296 0.741m9.857 4.743c-0.445 0.741 -0.963 0.889 -1.705 0.445 -0.963 -0.593 -0.889 -0.741 0.222 -0.741 0.667 0 1.26 -0.371 1.26 -0.889 0 -0.445 0.222 -0.667 0.445 -0.371 0.222 0.222 0.148 0.889 -0.222 1.556m-23.567 5.781c0.222 0.519 -0.074 0.296 -0.667 -0.445 -0.667 -0.815 -1.186 -2.149 -1.112 -2.964 0.074 -1.26 0.148 -1.186 0.667 0.445 0.296 1.038 0.815 2.372 1.112 2.964m-2.816 -2.446c0 0.815 -0.371 1.334 -0.667 1.112s-0.371 -0.815 -0.074 -1.408c0.519 -1.556 0.889 -1.408 0.741 0.296M59.289 182.312c0 0.371 -0.296 0.741 -0.741 0.741 -0.371 0 -0.741 -0.371 -0.741 -0.741 0 -0.445 0.371 -0.741 0.741 -0.741 0.445 0 0.741 0.296 0.741 0.741m-3.261 1.927c-1.705 1.186 -2.964 1.408 -2.297 0.296 0.222 -0.445 0.963 -0.741 1.556 -0.741s1.038 -0.371 1.038 -0.889c0 -0.445 0.222 -0.593 0.519 -0.296 0.371 0.296 -0.074 1.038 -0.815 1.63m4.298 0.667c0.222 0.593 0.074 1.853 -0.296 2.742 -0.519 1.408 -0.667 1.482 -0.815 0.371 -0.222 -2.001 -0.296 -2.297 -0.889 -3.335 -0.371 -0.519 -0.222 -0.889 0.445 -0.889 0.593 0 1.26 0.519 1.556 1.112m-2.446 2.372c0.815 1.112 0.815 1.186 -0.074 0.445 -0.815 -0.741 -1.26 -0.741 -2.149 0 -1.038 0.815 -1.038 0.741 -0.148 -0.445 0.519 -0.667 1.112 -1.26 1.186 -1.26s0.667 0.593 1.186 1.26m-22.53 1.112c-0.222 0.593 -0.445 0.371 -0.445 -0.445 -0.074 -0.815 0.148 -1.26 0.371 -0.963 0.222 0.222 0.296 0.889 0.074 1.408m35.573 0.741c-0.222 0.593 -0.445 0.371 -0.445 -0.445 -0.074 -0.815 0.148 -1.26 0.371 -0.963 0.222 0.222 0.296 0.889 0.074 1.408m-13.414 1.112c-0.148 0.148 -0.815 0 -1.482 -0.222 -1.038 -0.371 -1.112 -0.667 -0.371 -1.112 0.889 -0.519 2.52 0.741 1.853 1.334M28.162 192.984c0.667 2.149 1.112 2.594 1.63 1.853s0.593 -0.593 0.222 0.519c-0.519 1.927 2.149 9.042 3.928 10.524 0.667 0.519 0.889 0.815 0.371 0.593 -0.445 -0.296 -1.186 0.074 -1.556 0.741 -1.112 2.075 -3.039 0.593 -4.002 -3.039 -0.519 -1.853 -1.186 -3.335 -1.482 -3.335s-0.296 -0.519 -0.074 -1.26c0.296 -0.815 0.222 -1.038 -0.445 -0.667 -0.667 0.445 -0.741 0.074 -0.371 -1.334 0.296 -1.186 0.074 -2.594 -0.667 -3.631 -0.741 -1.112 -0.889 -2.149 -0.371 -3.409 0.741 -2.149 1.556 -1.482 2.816 2.446m11.191 -1.26c-0.667 1.186 -0.741 1.038 -0.815 -0.889 0 -1.556 0.222 -1.927 0.815 -1.334s0.593 1.186 0 2.223m32.312 3.706c-0.222 0.741 -0.371 0.296 -0.371 -0.889 0 -1.26 0.148 -1.779 0.371 -1.334 0.148 0.519 0.148 1.556 0 2.223m-14.896 0c-0.741 0.815 -2.742 0.889 -2.223 0.148 0.222 -0.371 0.889 -0.667 1.556 -0.667s0.963 0.222 0.667 0.519M54.842 197.876c0.593 0.371 0.815 0.741 0.371 0.741 -0.371 0 -1.26 -0.371 -1.853 -0.741s-0.741 -0.741 -0.371 -0.741c0.445 0 1.26 0.371 1.853 0.741m17.564 1.63c-0.222 0.593 -0.445 0.371 -0.445 -0.445 -0.074 -0.815 0.148 -1.26 0.371 -0.963 0.222 0.222 0.296 0.889 0.074 1.408m-25.494 0.371c-0.519 0.148 -1.556 0.148 -2.223 0 -0.741 -0.222 -0.296 -0.371 0.889 -0.371 1.26 0 1.779 0.148 1.334 0.371m26.235 4.817c-0.222 0.519 -0.371 0.148 -0.371 -0.889s0.148 -1.408 0.371 -0.963c0.148 0.519 0.148 1.408 0 1.853M53.73 209.733c0.222 0.371 0.074 0.741 -0.296 0.741 -0.445 0 -0.815 -0.371 -0.815 -0.741 0 -0.445 0.148 -0.741 0.296 -0.741 0.222 0 0.593 0.296 0.815 0.741m20.899 1.63c-0.222 0.593 -0.445 0.371 -0.445 -0.445 -0.074 -0.815 0.148 -1.26 0.371 -0.963 0.222 0.222 0.296 0.889 0.074 1.408m-13.34 4.447c-0.222 0.519 -0.371 0.148 -0.371 -0.889s0.148 -1.408 0.371 -0.963c0.148 0.519 0.148 1.408 0 1.853m14.97 0.963c0 0.371 -0.296 0.222 -0.667 -0.371s-0.667 -1.63 -0.667 -2.223c0 -1.186 1.26 1.186 1.334 2.594"/><path d="M73.74 66.7c-2.001 0.519 -2.075 0.593 -0.371 0.593 1.038 0 2.52 -0.222 3.335 -0.593 1.853 -0.815 0.148 -0.815 -2.964 0m37.426 0.741c1.482 0.371 2.89 0.371 3.335 -0.074 0.371 -0.371 -0.593 -0.667 -2.594 -0.593l-3.335 0.074zm-28.607 12.451c-1.038 5.336 1.186 12.451 4.521 14.674 2.52 1.705 6.744 2.075 10.005 1.038 5.114 -1.705 7.263 -8.449 4.743 -14.822 -0.667 -1.63 -1.408 -2.964 -1.705 -3.039 -0.222 0 -4.224 -0.074 -8.819 -0.148l-8.3 -0.148zm10.45 40.983c-0.815 1.186 -0.074 1.408 0.963 0.222 0.519 -0.593 0.593 -1.038 0.222 -1.038s-0.963 0.371 -1.186 0.815m-18.602 27.792c-1.334 1.038 -1.334 1.112 0.296 0.296 0.889 -0.445 1.63 -0.963 1.63 -1.112 0 -0.593 -0.371 -0.445 -1.927 0.815M60.4 27.495c-0.667 1.26 -1.112 2.446 -0.963 2.594 0.222 0.148 0.889 -0.889 1.556 -2.297 1.556 -3.187 0.963 -3.483 -0.593 -0.296M139.328 34.758c0 0.445 0.296 0.963 0.741 1.186s0.519 -0.074 0.296 -0.667c-0.519 -1.334 -1.038 -1.556 -1.038 -0.519"/>
                    </svg>
                </motion.div>
                <motion.div className='fixed -bottom-24 right-0' initial="initial" animate={animateSmall} variants={variants}>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="333.333" height="270.073.000000pt" viewBox="0 0 250 270.073" xmlnsXlink="http://www.w3.org/1999/xlink" transform="matrix(-1,0,0,1,0,0)">
                        <path d="M125 63.336a239 239 0 0 0-6.387 1.916c-4.106 1.186-11.222 5.2-17.336 9.763-2.828 2.19-4.014 2.463-10.492 2.463-6.296 0-7.756.274-10.493 2.281-1.734 1.278-3.559 2.829-3.924 3.467-.456.64-1.916 2.555-3.375 4.106-3.559 4.106-6.752 10.128-8.942 17.062-2.098 6.752-3.285 17.7-1.825 16.789.639-.457.821.182.456 1.55-1.733 7.026-1.733 11.406.092 14.508 1.368 2.463 2.28 3.193 4.105 3.01 2.281-.182 13.595-6.934 14.143-8.576.182-.456.912-.821 1.642-.821s1.277-.456 1.277-.912c0-2.281 2.92-.548 4.38 2.463 2.555 5.566 6.752 8.03 14.416 8.668 2.464.091 4.653.456 4.927.73.73.73 3.741 2.555 8.394 5.018 2.373 1.186 4.471 2.646 4.836 3.194.274.456 1.551.912 2.829.912 2.372 0 2.828.821 1.095 2.555-.64.638-.73 1.094-.365 1.094s-.365 1.187-1.552 2.738c-1.277 1.46-3.01 4.38-3.923 6.387s-1.916 3.65-2.281 3.65-1.186 2.189-1.734 4.744c-.638 2.646-1.46 5.474-1.824 6.204s-1.004 3.285-1.278 5.657c-.547 3.558-.456 4.288.639 3.832 1.825-.639 2.372 2.281 1.004 4.927-.73 1.551-1.187 1.825-1.552.912-.365-.82-.547-.73-.547.365-.091.822-.365 2.099-.639 2.829-.365 1.095 0 1.277 1.46.912 1.095-.273 2.281-1.368 2.646-2.372.639-1.734.821-1.642 1.643.821 1.003 2.829.273 6.205-1.46 6.387-.548.091-1.369.183-1.916.274-.457 0-.913 2.463-.822 5.292l.092 5.292 1.916-4.106 2.007-4.106.274 5.475c.182 3.01.82 5.748 1.368 6.113 1.825 1.186 16.424.639 18.978-.639 1.278-.73 3.376-1.095 4.745-1.003 1.46.182 3.01-.365 3.923-1.369s2.19-1.734 2.829-1.734c1.095 0 1.277-1.733 1.095-9.397-.183-8.668-.092-9.672 1.824-11.68 1.095-1.185 2.19-3.101 2.555-4.288.639-2.737-1.186-9.306-4.47-15.875-1.37-2.92-2.555-5.84-2.555-6.57 0-.82-1.278-2.828-2.829-4.653-2.19-2.464-2.737-3.74-2.28-5.474.364-1.37 1.277-2.282 2.189-2.282s2.098-.456 2.555-.912c.547-.547 2.646-1.825 4.653-3.01 5.748-3.103 13.047-8.851 13.047-10.311 0-.73.365-1.277.73-1.277.456 0 1.369-1.095 2.099-2.555.73-1.369 1.642-2.737 2.098-3.011.365-.365 1.004-2.555 1.186-4.927.639-5.018 2.008-5.84 6.296-3.74 3.74 1.733 10.949 2.006 11.588.273.547-1.551-.822-19.252-2.008-24.726-2.007-9.307-8.485-20.073-15.328-25.73-3.741-3.103-4.927-3.559-9.398-3.65-3.102-.091-6.66-.912-8.85-2.007-2.464-1.278-6.935-2.19-14.052-2.829-5.748-.547-10.583-1.003-10.857-.912-.274 0-1.46.365-2.737.821m19.343 29.197c5.93 7.208 7.116 7.3 5.2.639-.547-2.007-.73-3.741-.456-4.015.183-.273 1.916 1.643 3.741 4.197 3.376 4.654 5.018 5.292 5.018 1.825 0-3.193 2.099-1.46 5.11 4.015 2.28 4.288 2.92 7.025 3.832 15.237.639 6.66.73 10.858.182 12.409-.547 1.277-.912 3.193-.912 4.288s-1.916 4.015-4.38 6.57c-7.116 7.572-11.222 10.492-14.69 10.492-1.094 0-1.916.547-1.916 1.277 0 1.278-5.474 2.373-11.952 2.373-2.464 0-3.559-.365-3.559-1.278 0-.82-.638-1.095-1.824-.82-2.555.729-14.416-5.384-19.252-9.855-3.467-3.193-4.38-3.558-6.934-3.102-1.552.274-3.103.091-3.468-.456-.273-.457-1.55-.913-2.828-.913-1.551 0-2.555-.73-3.376-2.554-.547-1.369-1.551-2.829-2.19-3.194-1.186-.73-1.642-7.117-.73-8.12.274-.274 1.551-.274 2.737 0 1.643.274 2.281 1.003 2.281 2.463 0 2.099 2.373 4.836 3.285 3.832.274-.273.821-3.467 1.278-7.208 1.55-12.135 2.007-14.142 2.828-12.135.365 1.004.73 2.92.73 4.289.091 3.832 1.46 3.102 3.832-2.281 1.369-3.102 2.19-4.197 2.464-3.194.456 2.373 1.55 2.008 4.014-1.095 1.186-1.55 3.011-3.923 4.106-5.292l2.007-2.463-.547 3.65c-.274 2.007-1.46 4.744-2.737 6.021-2.555 2.829-3.65 8.03-2.19 10.767 1.55 2.828 6.752 2.646 9.671-.365 3.741-3.65 2.829-11.04-1.46-12.5-1.186-.365 1.095-5.566 2.829-6.66.547-.366 2.19-3.103 3.74-6.114 2.282-4.47 3.103-5.383 4.563-5.018 1.55.456 1.825.091 1.733-1.916-.09-1.369-.182-2.829-.09-3.194.182-1.277 5.291 3.468 10.31 9.398M62.681 131.95c-.274.73-.548.457-.548-.547-.09-1.004.183-1.551.457-1.186.273.274.365 1.095.09 1.733"></path><path d="M148.266 102.204c-2.554 2.555-4.197 6.661-3.558 9.033 1.642 6.752 13.139 4.562 13.139-2.463 0-2.92-4.106-8.03-6.387-8.03-.913 0-2.373.64-3.194 1.46m-17.244 30.657c-2.19 8.395.547 11.953 8.759 11.497 4.836-.274 4.836-.274 6.204-4.106.913-2.829 1.004-4.562.365-6.387-.82-2.464-1.094-2.555-7.755-2.828-6.57-.274-7.026-.183-7.573 1.824"></path>
                    </svg>
                </motion.div>
            </div>
        </div>
    )
}