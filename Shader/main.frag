#version 130

uniform uint outputID;

out vec4 color;

vec4 shadePhong();
vec4 shadeCoord();
vec4 shadeBRDF();
//vec4 shadeNorm();
void main()
{
    switch(outputID)
    {
	case 1u:
        color = shadeCoord();
		return;
	case 2u:
		color = shadePhong();
		return;
	case 3u:
		color = shadeBRDF();
		return;
//	case 4u:
//        color = shadeNorm();
//        return;
    }
}
