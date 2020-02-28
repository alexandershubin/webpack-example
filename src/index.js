import * as $ from 'jquery'
import Post from "@modules/Post";
import './styles/style.css';
import json from './assets/json'
import logo from '@/assets/0_8eb56_842bba74_XL-640x400.jpg'
import './styles/less.less'
import './styles/scss.scss'

const post = new Post('webpack post title', logo)

$('pre').addClass('code').html(post.toString())

