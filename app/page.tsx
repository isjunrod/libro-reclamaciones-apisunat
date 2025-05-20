'use client';

import {
    ArrowRight,
    ChevronDown,
    Filter,
    MessageSquare,
    MoreHorizontal,
    Plus,
    Search,
    Settings,
    Star,
    ThumbsUp,
} from 'lucide-react';
import { useState } from 'react';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';

// Estilo CSS para el manejador de redimensionamiento
const resizeHandleStyle = {
    // width: '8px',
    // margin: '0 -4px',
    // position: 'relative',
    // background: 'transparent',
    // cursor: 'col-resize',
    // transition: 'background 0.2s',
    // ':hover': {
    //     background: 'rgba(255, 0, 0)',
    // },
    // '::after': {
    //     content: '""',
    //     position: 'absolute',
    //     top: '0',
    //     bottom: '0',
    //     left: '50%',
    //     borderLeft: '1px solid #e2e8f0',
    //     transform: 'translateX(-50%)',
    // },
} as React.CSSProperties;

export default function ReclamacionesApp() {
    const [selectedReclamacion, setSelectedReclamacion] = useState(1);

    const navegacionItems = [
        { id: 1, nombre: 'General', icono: null },
        { id: 2, nombre: 'Reclamaciones', icono: null, active: true },
        { id: 3, nombre: 'Dashboard', icono: null },
        { id: 4, nombre: 'Configuración', icono: <Settings size={16} /> },
    ];

    const reclamaciones = [
        {
            id: 1,
            titulo: 'Cobro excesivo en factura de Mayo',
            tipo: 'Urgente',
            estado: 'En proceso',
            etiquetas: ['Facturación', 'Prioridad Alta'],
            comentarios: 3,
            tiempo: '45m',
            usuario: 'Carlos Mendoza',
            fecha: 'Jun 12, 2024',
        },
        {
            id: 2,
            titulo: 'Internet lento en zona residencial',
            tipo: 'Mejora',
            estado: 'Abierto',
            etiquetas: ['Servicio', 'Técnico'],
            comentarios: 6,
            tiempo: '3h',
            usuario: 'Maria Garcia',
            fecha: 'Jun 11, 2024',
        },
        {
            id: 3,
            titulo: 'Error en atención al cliente',
            tipo: 'Problema',
            estado: 'En proceso',
            etiquetas: ['Atención', 'Call Center'],
            comentarios: 2,
            tiempo: '7h',
            usuario: 'Pedro Martinez',
            fecha: 'Jun 11, 2024',
        },
        {
            id: 4,
            titulo: 'Fallos repetidos en la app móvil',
            tipo: 'Error',
            estado: 'Pendiente',
            etiquetas: ['App Móvil', 'Bug'],
            comentarios: 5,
            tiempo: '2d',
            usuario: 'Laura Vega',
            fecha: 'Jun 10, 2024',
        },
        {
            id: 5,
            titulo: 'Demora en instalación de servicio',
            tipo: 'Urgente',
            estado: 'Asignado',
            etiquetas: ['Instalación', 'Demora'],
            comentarios: 4,
            tiempo: '2d',
            usuario: 'Juan Pérez',
            fecha: 'Jun 10, 2024',
        },
    ];

    const reclamacionActual = reclamaciones.find((rec) => rec.id === selectedReclamacion);

    const getTipoColor = (tipo: any) => {
        switch (tipo) {
            case 'Urgente':
                return 'bg-red-100 text-red-800';
            case 'Mejora':
                return 'bg-purple-100 text-purple-800';
            case 'Error':
                return 'bg-orange-100 text-orange-800';
            case 'Problema':
                return 'bg-blue-100 text-blue-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getEstadoColor = (estado: any) => {
        switch (estado) {
            case 'En proceso':
                return 'bg-yellow-100 text-yellow-800';
            case 'Abierto':
                return 'bg-green-100 text-green-800';
            case 'Pendiente':
                return 'bg-red-100 text-red-800';
            case 'Asignado':
                return 'bg-blue-100 text-blue-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const mensajes = [
        {
            id: 1,
            usuario: 'Carlos Mendoza',
            fecha: 'Jun 12, 2024',
            contenido:
                'Estoy experimentando un problema con mi factura de mayo donde me han cobrado un monto excesivo. A pesar de haber seguido el proceso establecido para reportar el error, no he recibido ninguna respuesta satisfactoria.\n\nHe intentado comunicarme con el área de atención al cliente en múltiples ocasiones, pero no he logrado resolver el problema. La factura muestra cargos por servicios que no contraté y el monto total es significativamente mayor al habitual.',
            avatar: '👤',
        },
        {
            id: 2,
            usuario: 'Ana López',
            fecha: 'Jun 12, 2024 - 1h ago',
            contenido:
                'Hemos recibido su reclamación. El equipo está trabajando en revisar los detalles de su facturación. Nos comunicaremos con usted a la brevedad para resolver este inconveniente.',
            avatar: '👩‍💼',
        },
        {
            id: 3,
            usuario: 'Carlos Mendoza',
            fecha: '45m ago',
            contenido:
                'Gracias por la respuesta. Espero una solución pronta ya que necesito regularizar mi pago y esto está afectando mi historial crediticio.',
            avatar: '👤',
        },
    ];

    return (
        <div className="flex h-screen bg-white text-gray-800">
            <PanelGroup direction="horizontal">
                {/* Navegación lateral izquierda */}
                <Panel defaultSize={15} minSize={10}>
                    <div className="h-full border-r border-gray-200 flex flex-col overflow-hidden">
                        <div className="p-4 flex items-center border-b border-gray-200">
                            <div className="bg-blue-500 text-white rounded p-1 mr-2">
                                <span className="font-bold">CR</span>
                            </div>
                            <span className="font-semibold">Claro Reclamaciones</span>
                        </div>

                        <div className="p-2">
                            <div className="text-xs font-medium text-gray-500 mb-2">General</div>
                            <ul>
                                {navegacionItems.map((item) => (
                                    <li
                                        key={item.id}
                                        className={`flex items-center p-2 rounded-md text-sm mb-1 ${item.active ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'}`}
                                    >
                                        {item.icono && <span className="mr-2">{item.icono}</span>}
                                        <span>{item.nombre}</span>
                                        {item.id === 2 && (
                                            <span className="ml-auto bg-gray-200 text-xs rounded-full px-2">
                                                5
                                            </span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-4 p-2">
                            <div className="text-xs font-medium text-gray-500 mb-2 flex justify-between items-center">
                                <span>Etiquetas</span>
                                <ChevronDown size={14} />
                            </div>
                            <ul>
                                <li className="flex items-center p-2 text-sm mb-1 hover:bg-gray-100 rounded-md">
                                    <span className="w-3 h-3 rounded-full bg-red-500 mr-2"></span>
                                    <span>Urgentes</span>
                                    <span className="ml-auto bg-gray-200 text-xs rounded-full px-2">
                                        2
                                    </span>
                                </li>
                                <li className="flex items-center p-2 text-sm mb-1 hover:bg-gray-100 rounded-md">
                                    <span className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
                                    <span>En proceso</span>
                                    <span className="ml-auto bg-gray-200 text-xs rounded-full px-2">
                                        2
                                    </span>
                                </li>
                                <li className="flex items-center p-2 text-sm mb-1 hover:bg-gray-100 rounded-md">
                                    <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                                    <span>Resueltas</span>
                                    <span className="ml-auto bg-gray-200 text-xs rounded-full px-2">
                                        0
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Panel>

                <PanelResizeHandle /* style={resizeHandleStyle}  */ />

                {/* Lista de reclamaciones */}
                <Panel defaultSize={25} minSize={15}>
                    <div className="h-full border-r border-gray-200 flex flex-col overflow-hidden">
                        <div className="p-4 border-b border-gray-200">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="font-semibold text-lg">Reclamaciones</h2>
                                <button className="bg-blue-500 text-white rounded-md p-2">
                                    <Plus size={16} />
                                </button>
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Buscar reclamaciones..."
                                    className="w-full p-2 pl-8 border border-gray-300 rounded-md text-sm"
                                />
                                <Search
                                    className="absolute left-2 top-2.5 text-gray-400"
                                    size={16}
                                />
                            </div>
                        </div>

                        <div className="flex justify-between items-center p-2 border-b border-gray-200 text-sm">
                            <button className="flex items-center text-gray-600">
                                <Filter size={14} className="mr-1" /> Filtrar
                            </button>
                            <div className="flex items-center text-gray-600">
                                <span className="mr-1">Recientes</span>
                                <ChevronDown size={14} />
                            </div>
                        </div>

                        <div className="overflow-y-auto flex-grow">
                            {reclamaciones.map((reclamacion) => (
                                <div
                                    key={reclamacion.id}
                                    className={`p-4 border-b border-gray-200 cursor-pointer ${selectedReclamacion === reclamacion.id ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
                                    onClick={() => setSelectedReclamacion(reclamacion.id)}
                                >
                                    <div className="flex justify-between items-start mb-1">
                                        <div
                                            className={`text-xs py-0.5 px-2 rounded-full ${getTipoColor(reclamacion.tipo)}`}
                                        >
                                            {reclamacion.tipo}
                                        </div>
                                        <span className="text-xs text-gray-500">
                                            {reclamacion.tiempo}
                                        </span>
                                    </div>
                                    <h3 className="font-medium mb-2">{reclamacion.titulo}</h3>
                                    <div className="flex flex-wrap gap-1 mb-2">
                                        {reclamacion.etiquetas.map((etiqueta, index) => (
                                            <span
                                                key={index}
                                                className="bg-gray-100 text-xs py-0.5 px-2 rounded-full"
                                            >
                                                {etiqueta}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center text-xs text-gray-500">
                                        <div className="flex items-center">
                                            <MessageSquare size={12} className="mr-1" />
                                            <span>{reclamacion.comentarios}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Panel>

                <PanelResizeHandle style={resizeHandleStyle} />

                {/* Contenido de la reclamación */}
                <Panel defaultSize={40}>
                    <div className="flex-grow border-r border-gray-200 flex flex-col overflow-hidden">
                        {reclamacionActual && (
                            <>
                                <div className="p-4 border-b border-gray-200">
                                    <div className="flex justify-between items-center mb-2">
                                        <h2 className="font-semibold text-lg">
                                            {reclamacionActual.titulo}
                                        </h2>
                                        <div className="flex items-center gap-2">
                                            <button className="p-1 hover:bg-gray-100 rounded">
                                                <ThumbsUp size={16} className="text-gray-500" />
                                            </button>
                                            <button className="p-1 hover:bg-gray-100 rounded">
                                                <Star size={16} className="text-gray-500" />
                                            </button>
                                            <button className="p-1 hover:bg-gray-100 rounded">
                                                <MoreHorizontal
                                                    size={16}
                                                    className="text-gray-500"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div
                                            className={`text-xs py-0.5 px-2 rounded-full ${getEstadoColor(reclamacionActual.estado)}`}
                                        >
                                            {reclamacionActual.estado}
                                        </div>
                                        {reclamacionActual.etiquetas.map((etiqueta, index) => (
                                            <span
                                                key={index}
                                                className="bg-gray-100 text-xs py-0.5 px-2 rounded-full"
                                            >
                                                {etiqueta}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="overflow-y-auto flex-grow p-4">
                                    {mensajes.map((mensaje) => (
                                        <div key={mensaje.id} className="mb-6">
                                            <div className="flex items-center mb-2">
                                                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                                                    {mensaje.avatar}
                                                </div>
                                                <div>
                                                    <div className="font-medium text-sm">
                                                        {mensaje.usuario}
                                                    </div>
                                                    <div className="text-xs text-gray-500">
                                                        {mensaje.fecha}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pl-10 text-sm whitespace-pre-line">
                                                {mensaje.contenido}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="p-4 border-t border-gray-200">
                                    <div className="border border-gray-300 rounded-md p-2">
                                        <div className="text-sm text-gray-400 mb-10">
                                            Escribe una respuesta...
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="flex gap-2">
                                                <button className="p-1 hover:bg-gray-100 rounded">
                                                    <Plus size={16} className="text-gray-500" />
                                                </button>
                                            </div>
                                            <button className="bg-blue-500 text-white rounded-md px-3 py-1 text-sm flex items-center">
                                                Enviar <ArrowRight size={14} className="ml-1" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </Panel>

                <PanelResizeHandle style={resizeHandleStyle} />

                {/* Panel de detalles */}
                <Panel defaultSize={20} minSize={10}>
                    <div className="h-full flex flex-col overflow-hidden">
                        <div className="p-4 border-b border-gray-200">
                            <h2 className="font-semibold">Detalles</h2>
                        </div>

                        {reclamacionActual && (
                            <div className="p-4 overflow-y-auto flex-grow">
                                <div className="mb-4">
                                    <div className="text-xs text-gray-500 mb-1">Estado</div>
                                    <div
                                        className={`inline-flex items-center py-0.5 px-2 rounded-full text-xs ${getEstadoColor(reclamacionActual.estado)}`}
                                    >
                                        <span className="w-2 h-2 rounded-full bg-current mr-1"></span>
                                        {reclamacionActual.estado}
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <div className="text-xs text-gray-500 mb-1">Tipo</div>
                                    <div className="text-sm">{reclamacionActual.tipo}</div>
                                </div>

                                <div className="mb-4">
                                    <div className="text-xs text-gray-500 mb-1">Reportado por</div>
                                    <div className="text-sm">{reclamacionActual.usuario}</div>
                                </div>

                                <div className="mb-4">
                                    <div className="text-xs text-gray-500 mb-1">Fecha</div>
                                    <div className="text-sm">{reclamacionActual.fecha}</div>
                                </div>

                                <div className="mb-4">
                                    <div className="text-xs text-gray-500 mb-1">Actividad</div>
                                    <div className="text-sm">
                                        Última: {reclamacionActual.tiempo}
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                                        <span>Etiquetas</span>
                                        <Plus size={12} className="cursor-pointer" />
                                    </div>
                                    <div className="flex flex-wrap gap-1">
                                        {reclamacionActual.etiquetas.map((etiqueta, index) => (
                                            <span
                                                key={index}
                                                className="bg-gray-100 text-xs py-0.5 px-2 rounded-full"
                                            >
                                                {etiqueta}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <div className="text-xs text-gray-500 mb-1">Asignado a</div>
                                    <div className="flex items-center">
                                        <div className="w-6 h-6 rounded-full bg-purple-200 flex items-center justify-center text-xs mr-2">
                                            AL
                                        </div>
                                        <span className="text-sm">Ana López</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </Panel>
            </PanelGroup>
        </div>
    );
}
