function data(){
    return {
        areas: [
            {
                nombre: 'Administración',
                cargos: [
                    'Comercial',
                    'Compras',
                    'Contables',
                    'Gestoría',
                    'Legales',
                    'RR.HH.',
                    'Seguros',
                    'Depósito',
                ],
            },
            {
                nombre: 'Sistemas',
                cargos: [
                    'Soporte técnico',
                    'Programación',
                ],
            },
            {
                nombre: 'Área Operativa',
                cargos: [
                    'Tráfico',
                    'Departamento Satelital',
                ],
            },
            {
                nombre: 'Chofer',
                cargos: [
                    'Larga Distancia',
                    'Corta Distancia',
                    'Clarkista',
                    'Hidrogruista',
                ],
            },
            {
                nombre: 'Servicios Generales',
                cargos: [
                    'Electricista',
                    'Plomero',
                    'Gasista',
                    'Peón',
                ],
            },
            {
                nombre: 'Taller',
                cargos: [
                    'Mecánico',
                    'Electricista',
                    'Chapista',
                    'Gomero',
                    'Frenista',
                    'Lubricentro ',
                    'Lavadero',
                ],
            },
            {
                nombre: 'Otros',
                cargos: [
                    'Otros'
                ],
            }
        ],
        selectedCargos:[
            'Seleccione Área de preferencia'
        ],
        selectedArea: 'area',
        filtrarCargos() {
            this.selectedCargos = this.areas.find( a => a.nombre === this.selectedArea ).cargos
        }
    }
}