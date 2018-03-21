#version 130

in vec3 n;
uniform vec3 eyePos;
vec4 shadeNorm()
{
    return vec4(n, 1);
}
